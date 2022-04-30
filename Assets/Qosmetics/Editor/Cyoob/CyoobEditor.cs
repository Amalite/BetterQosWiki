﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using System.IO;
using System.Diagnostics;

[CustomEditor(typeof(Qosmetics.Notes.Cyoob))]
public class CyoobEditor : Editor
{
    public static string Extension { get => "cyoob"; }
    bool packageSettingsOpened = true;
    bool objectSettingsOpened = true;
    QosmeticsProjectSettings _projectSettings = null;
    public override void OnInspectorGUI()
    {
        if (!_projectSettings)
        {
            _projectSettings = QosmeticsProjectSettings.GetOrCreateSettings();
        }

        serializedObject.Update();
        Qosmetics.Notes.Cyoob cyoob = target as Qosmetics.Notes.Cyoob;

        GUILayout.BeginVertical();
        EditorGUILayout.LabelField("", GUI.skin.horizontalSlider);
        packageSettingsOpened = EditorGUILayout.Foldout(packageSettingsOpened, "Package Settings");
        if (packageSettingsOpened)
        {
            EditorGUILayout.BeginHorizontal();
            EditorGUILayout.BeginVertical();
            cyoob.ObjectName = EditorGUILayout.TextField("Name", cyoob.ObjectName);
            cyoob.Author = EditorGUILayout.TextField("Author", cyoob.Author);
            cyoob.Description = EditorGUILayout.TextField("Description", cyoob.Description);
            EditorGUILayout.EndVertical();
            EditorGUILayout.EndHorizontal();
        }
        EditorGUILayout.LabelField("", GUI.skin.horizontalSlider);
        objectSettingsOpened = EditorGUILayout.Foldout(objectSettingsOpened, "Object Settings");
        if (objectSettingsOpened)
        {
            cyoob.ShowArrows = EditorGUILayout.ToggleLeft("Use Base Game Arrows", cyoob.ShowArrows);
        }
        EditorGUILayout.LabelField("", GUI.skin.horizontalSlider);

        if (cyoob.ValidateObject())
        {
            if (GUILayout.Button($"Export {cyoob.GetType().Name}"))
            {
                Export(cyoob);
            }

            if (_projectSettings.AllowPushToQuest && _projectSettings.IsAdbValid() && GUILayout.Button($"Push {cyoob.GetType().Name} To Quest"))
            {
                string path = Export(cyoob);
                if (!string.IsNullOrEmpty(path))
                Qosmetics.Core.AdbUtils.Push(path, $"/sdcard/ModData/com.beatgames.beatsaber/Qosmetics/Cyoobs/{Path.GetFileName(path)}");
            }
        }
        else
        {
            EditorGUILayout.LabelField("You're missing the arrow & dot Cyoobs!", GUI.skin.button);
        }

        EditorGUILayout.LabelField("", GUI.skin.horizontalSlider);

        GUILayout.EndVertical();
    }

    string Export(Qosmetics.Notes.Cyoob cyoob)
    {
        string exportName = _projectSettings.ExportFileName;
        exportName = exportName.Replace("{ObjectName}", cyoob.ObjectName);
        exportName = exportName.Replace("{ObjectAuthor}", cyoob.Author);
        exportName = exportName.Replace("{Extension}", Extension);

        string path = EditorUtility.SaveFilePanel($"Save {Extension} file", "", exportName, Extension);
        if (!string.IsNullOrEmpty(path)) Qosmetics.Core.ExporterUtils.ExportAsPrefabPackage(cyoob.gameObject, $"_{cyoob.GetType().Name}", path);
        return path;
    }
}
