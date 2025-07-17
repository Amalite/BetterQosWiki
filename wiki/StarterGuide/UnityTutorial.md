---
title: Unity Tutorial
---
# Unity is a tricky program to use, even harder to work with than Blender! {#Intro}
But don't worry. **You won't be shown the entire ins and outs of using Unity.** Instead, you'll learn just the ***basics*** of what you need to know in order to make your own saber!

::: info :speech_balloon: NOTE
If you already know how to use **Unity**, you can skip ahead to turning your model into a saber [here](/WIP).
:::
::: info :speech_balloon: NOTE
If you're using Unity **2019.3.2f1**, your screen will look different compared to mine. Don't worry! I'm just using the latest version of Unity **Beat Saber** runs on, **2022.3.33f1**. ***Everything*** I talk about here will be **found in the same places** as shown in Unity 2022 when compared to Unity 2019.
:::
# Scene View
This is the biggest window that should be in the center of your Unity Window. Here, you'll be able to see everything you've placed into your **Scene**!
<img src="/images/Unity Scene Window.png" width="1000"/>
::: details :question: Question: What is a Scene?
A **Scene** is a like a "Level" in a video game. Inside a Scene, You'll find everything is capable of being moved around and edited to your heart's content! Think of Unity like a **Level Editor** with Scenes being the **maps** to be edited with it.

Video Games can be made up of **hundreds of different** Scenes, or just **a few**! It all *depends on the game and how the Scene is used*.

*For example*, **the area you play songs** in **Beat Saber** is a single Scene! Instead of making every song chart be it's own Unity **Scene**, Beat Saber instead reads data from a song chart that it then uses to create notes all in that one **Scene**!
:::

## Navigation

**It's quite similar to Blender!** Click on Objects to *select them and use Gizmos* on the selected object, and **Middle Click** to Pan the camera. The differences now come in when it comes to the use of **Right Click** in the **Scene Window**.

Instead of opening a context window, **Right Click lets you fly the camera around!** Use **WASD** to move the camera, **Q** to go down, **E** to go up, **Shift** to speed up the camera, and **Scroll Wheel** to adjust the speed of the camera.

## Gizmos

<img src="/images/Unity Gizmo Example.png" width="100"/>

Similar to Blender as well, Unity has it's own **Gizmos**, and they function quite the same way here. We'll only show you what's new, so if you know how to use [Blender's Gizmos](/StarterGuide/BlenderTutorial#gizmos), this should be easy to catch on!

::: tip :bulb: TIP
You can click the two long bars on the top of the Gizmo Bar to move them around!

You can even change the orentation of the Bar or even hide it by right clicking it! *(You can unhide it later by opening the **Overlay Menu** with **`** or clicking the three dots to the top right of the window and setting **Tools** to **Show**)*
:::

### View Tool
Simple and first from the top is the **View Tool**. This lets you pan the camera around in the same way holding **Middle Click** works!

Use this tool if you find using Middle Click to pan to be tiring, or you don't want to select anything with any other tools.

### Rectangle Tool
2nd from the bottom is the Rectangle Tool, also known as the **Rect Tool**. This lets you drag a **selection box** over objects to select multiple objects at once! Using this tool is helpful if you found multiple objects in your Scene that you don't know the names of in the **Hierarchy** *(Found **Left** of the Scene Window)*, or there's just too many of them to be able to select all at once in the **Hierarchy**!
<hr>

# Inspector

<img src="/images/Unity Inspector Window.png" width="500"/>

This is the **Inspector Window**. This is where you'll configure a majority of the details of your selected object, where you can change the **Transforms** of the object if it is in your scene, along with any **Components** attached to said object.
::: tip :bulb: TIP
You can **click and hold** the **X**, **Y**, and **Z** letters beside each value to **slide the values** around! This is useful **if you want to get an object into postion**, but *don't know the specifc value to set a postion to*.
:::
**Components** are the extra things you'll be able to add onto your object to make that object achieve the specifc goal you have in mind for that object, whether it be **playing an animation**, **emit particles**, or **having collsion or physics**!

We'll go over how to add components when it's time to [make your saber](/WIP), but for now, it's much to complex to go into.

::: danger :no_entry: CAUTION
Even though you can add any component to your object. **Scripts cannot be exported with the Qosmetics Project**, and neither Qosmetics nor the Custom Models mod will run these Scripts.
:::

# Project Browser
<img src="/images/Unity Project Window.png" width="1000"/>

This is where you'll find all the files that are inside your **Project Folder**. Since this is an **Empty Unity Project**, there isn't much to see here, but as you work with the Qosmetics Unity Project or make your own **Assets**, your Project Browser will come to life!
::: details :question: Question: What is an Asset?
Assets are what make up the **entire** game/custom model you're making.

They're your **Scenes**, **Materials**, **Shaders**, **Meshes**, **Animations**, **Scripts**, **Text**, and ***even more***!

Without **Assets**, you wouldn't be able to make ***anything***!
:::
Inside the Project Browser you can **Right Click** to open the Context Menu, allowing you to perform a variety of actions, along with allowing you to create various **blank Assets** to work with in seconds!

For starters, Clicking **Create > Folder** will create a new folder inside your **Project**, allowing you to group your **Assets** together for easier management.
::: info :speech_balloon: NOTE
The **Project Browser** is just an easier to use version of the inside of your **Project Folder** with your file browser. That being said. Any changes to the folder or the files inside them will have **an *immediate* effect inside of Unity**, so be careful!

:::
# Console
Simplist out of all of the windows is the **Console**. This is where you'll see any **errors** or **warnings** that pop up while working on your Project. Be sure to **check this often** to make sure nothing goes wrong!
<img src="/images/Unity Console Window.png" width="1000"/>

# Animation
<img src="/images/Unity Animation Window.png" width="1000"/>
Arguably the most complex to master Window is the **Animation** Window. This is where you'll create and edit animations of various values changing over time!

These values can be simple like the location, rotation, and scale of the object, or more complex like the currently used material or mesh!

In the Dopesheet Tab, you can create and edit the postions of keyframes for each value, while the Curves Tab will let you edit the Curve Transition of one Keyframe to another!

You can **right click on a keyframe** to change how that Keyframe **transitons to and from other keyframes**, though we'll get into that in more detail in [the future](/WIP).
::: details :question: Question: What is a Keyframe?
A **Keyframe** is **the set number a value will become at that given point in time**.

For example, a Box at **Position 1** will be at **Position 2** in **5 seconds**, stays still as **Position 2** becomes **Position 3** for **2 seconds**, and then returns to **Position 1** which is now **Position 4** at **15 seconds**.

By default, values will **smoothly change** from one the previous Keyframe to the next, without stopping until the Animation is complete, though you can change how a Value will transition from one Keyframe to the next. This means that **the farther apart in time two Keyframes are, the longer the value will take** to change from one Keyframe to another.

In the previous example, this means that the Box will **take longer to return** from **Position 1(4) from Position 2(3)** than it took it to travel from **Position 1 to Position 2**!
:::
<hr>

# Attaching Assets to GameObjects {#attaching-assets}

There's two ways to attach Assets you've **made or acquired** to the objects in your scene! The first is the easiest when it's something like a **Material** you want a **part of the model** to use.

### Drag the Asset from your Project Browser to the object in either the Scene View or the Hierarchy. {#Drag-and-Drop}
<video controls width="600">
<source src="/images/Drag and Drop Component Example.mp4" type="video/mp4"/>
</video>
If you drag a Material onto Object in the Scene View, You'll be able to preview what that Object will look like with that Material on before you set it!

::: info :speech_balloon: NOTE
If you have [Material Slots](/StarterGuide/ModelCreation#Step-6) in the Object, this Drag and Drop method is slightly more complicated. Just drag and drop the material onto the specifc part of the model you want to change the material of!
:::

### Add the Asset as a Component with the Add Component button in Inspector {#Add-Component}
<video controls width="600">
<source src="/images/Add Component Example.mp4" type="video/mp4"/>
</video>

If your asset is a **Script**, you can attach it as a component by itself! Just select the object, then in the Inspector Window, Click **Add Component**, and either **search the name** of the Script or **navigate** to where the script is stored *(Default is Scripts>"Script Name")*
<hr>