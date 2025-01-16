---
title: Model Creation
---
# Now that you've come up with an idea of what you want your model to be, it's time to get started with creating your custom model!

For tutorial purposes, we'll be making **a saber** with **Blender**. So if you're looking to create a wall or block first, you might want to translate some of these steps into making those, but if not, that's fine too! Just be sure to follow along as you create your saber!

::: tip :bulb: TIP
If you don't know how to use Blender, you can learn the basics [here](/StarterGuide/BlenderTutorial).
:::

## Opening Blender and Setting Up Your Scene
Time to open Blender and get started! Once you open Blender, you will see a splash screen pop up with a few options, you can either click outside of the box, or just click "General" under "New File"

<img src="/images/Blender Splash Example.png" width="500"/>

From there, you'll have full access to Blender's tools we'll use to make models!

<img src="/images/Blender Scene Example.png" width="1000"/>

::: info :speech_balloon: NOTE
If you see anything here that you don't find on your version of Blender, you might not be on the version I use (4.1), or I have an **addon** you can get online! For the sake of simplicity, we won't go over anything that requires an addon or extension to Blender that isn't already built-in.
:::

# For this guide, we'll be making a saber based off of the design I came up with in the [Design Phase](https://github.com/Amalite/BetterQosWiki/wiki/Coming-Up-With-A-Design#what-is-your-model-going-to-look-like-when-its-finished), so follow along with your own design and use what I show you with your own saber!
## Step 1: Delete the cube, camera, and light included with the new file
Don't worry! You can create them again later, but not having them in your scene can reduce the risk of accidentally exporting your model with them

<img src="/images/Delete Cube Example.gif" width="1000"/>


## Step 2: Add the template model, and move it to a good spot
In order to make your saber the right size, you need a template to get the size off of!
In Blender, click `File>Import>FBX`. This will open a window showing your files. Navigate to where you have your Qosmetics Project, and go to `Assets/Qosmetics/Models/`, from there, you should see a file named `Actual_good_template.fbx`. This is the saber template!

<img src="/images/Import Template Example.png" width="750"/>

> ***After that, you'll see that you now have the template in your scene, ready to use!***
> <img src="/images/Template Scene Example.png" width="750"/>

::: info :speech_balloon: NOTE
When you import the template, they'll be found at the origin of the scene, just move the Hitbox and Shape models around to where you want!
:::

::: tip :bulb: TIP
As a general rule of thumb, **_don't use the template in your saber_** unless you modify it in a significant way. **Try to be original!**
:::

## Step 3: Create a cylinder, and transform it into a handle
Click `Add>Mesh>Cylinder` to create a cylinder in your scene, and then, opening the `Add Cylinder` dropdown box, move around the sliders for **height**, **radius**, **location**, and **rotation** until the cylinder is the **right size** to be your saber's **handle**!
::: tip :bulb: TIP
If you **accidentally click away** from the dropdown box, you can still change ***most*** of these values! Just use the **Move**, **Scale**, and **Rotate** tools!
<img src="/images/Create Cylinder Example.png" width="750"/>
:::

::: danger :no_entry: CAUTION
Be careful with changing the **Vertices** value! This determines **how many sides your cylinder will have**; the higher the number, the more sides. While this may seem good to turn up to as high as possible, **high values can seriously impact performance**. Keep it to the default **32** or even **16**! We'll show you a neat trick for making your models appear smooth later.
:::

## Step 4: Make the blade by extruding the front of the cylinder
Going into the **Modeling Tab**, select one side of a cylinder's **vertices**, and select the **Extrude Tool**, with it, move the yellow circle just a bit to extrude the vertices, then, selecting the **Scale** Tool, **shrink the vertices** until you have the **blade's width** that you want to have

::: info :speech_balloon: NOTE
Before **using the Scale tool**, open the dropdown box when extruding and set the newly created vertices' positions to `0`, this will move your created verts to the same exact spot where the original vertices are. This will prevent a **"slope"** being created when you then shrink them!
:::

<img src="/images/Extrude Example.png" width="750">
<img src="/images/Correct Baton Example.png" width="750"/>

Then, use the **Extrude Tool** again to make the length of the blade. If you want, you can repeat this step over and over to achieve a "Police Baton"-like design, with the blade getting incrementally thinner towards the end, or skip the note step to create a **needle blade**!

<br/>

::: info :speech_balloon: NOTE
To speed up production, you can use `C` to enter **Circle Select** mode, allowing you to select vertices with a circular selection tool. Then, press `E` to use the **Extrude Tool**, **click without moving your mouse** to keep them in the same spot, and then `S` to use the **Scale Tool** to shrink them down before pressing `E` again to extrude outwards!
<br/>

*If all of that sounds too complex for you, that's **OK**, just watch this video to simplify things down!*

<video controls width="600">
<source src="/images/Extrude Shortcut Example.mp4" type="video/mp4"/>
</video>
:::

## Step 5: Making a ring
This step is about as easy as **Step 3**. Going back to the **Layout Tab**, create a Torus through `Add>Mesh>Torus`, and using the dropdown box, change the **Major Radius**, **Minor Radius**, **Location**, and **Rotation** until the newly created ring is positioned at the end of the handle, and the start of the blade.
::: info :speech_balloon: NOTE
**Major Radius** changes the overall **size** of the ring, while **Minor Torus** changes the **thickness** of the ring.
:::

<img src="/images/Create Ring Example.png" width="750"/>

## Step 6: Material slots and Shading setup!
Select both the **saber** and the **ring**, right click to open the **context menu**, and select `Shade Smooth`

<img src="/images/Shade Smooth Example.png" width="500"/>

This will make your model appear **smooth**, making each face of the model have smooth lighting with nearby faces instead of the flat lighting it has by default.
<img src="/images/Shade Smooth Finish Example.png" width="500"/>

::: tip :bulb: TIP
If you ever want to go back to flat shading, just click **Shade Flat** in the context menu!
:::

### Next, we'll set **Material Slots**
To do this, go to the **Properties** window, select the Material tab, and then, while having **just** the saber selected, click the `+` sign twice. This will create 2 Material Slots to use later on that we now have to set up.

<img src="/images/Material Slots Example.png" width="250"/>

<br/>
<br/>

Now go into the **Modeling Tab** and change the Viewport Shading mode to Wireframe. **Select the vertices** for the **blade** of the saber, and click `Assign` on the **Properties** window. This will set the first Material Slot to be used by the **blade** of the saber. Now do the same with the saber's **handle**, using the second **Material Slot**!

<img src="/images/Material Slots Selection Example.gif" width="750"/>

::: info :speech_balloon: NOTE
To test your material slots, make two different materials and set them to these two different slots, by clicking the material icon below the material slot list, or by clicking the `New Material` button, and then changing the `Base Color` to something easily visible.
<br>
<img src="/images/Material Creation Example.png" width="250"/>
<br>
Then change your Viewport Shading mode to Material Preview.
<br>
<img src="/images/Material Slots Preview Example.png" width="750"/>
:::

::: danger :no_entry: CAUTION
**Don't worry about making your materials in Blender!** We'll be doing all of that in Unity, since exporting materials in Blender comes with *a lot of drawbacks*, mainly the fact that you're **unable to set Custom Colors in Blender**. You'll have the chance to do that in Unity!
<br>

If a part of your saber *doesn't* use Custom Colors, then it's still good to worry about materials and shading later on **in Unity**. For now, it's a step too complicated to get into here. 
:::

<br/>
<br/>

## Step 7: Finish up your model, name the parts to the model, and export!
You're almost done! Now all that's left is to finish up whatever you have left to do on your saber, group your parts together, and export the saber to put into Unity.

First, it is *generally good practice* to name the parts of your saber. To do this, **double click** the name of the saber part in your **Hierarchy window**, and type in the name you want for that part of the saber and press `Enter` or click away to confirm.

<img src="/images/Blender Name Example.png" width="250"/>

Next, we're going to **parent** the ring to the saber. To do this, first **select first the ring**, then the **saber**. Then after pressing `Right Click`, click `Parent>Object` to parent the ring to the saber.

<img src="/images/Blender Parent Example.png" width="750"/>

::: tip  :bulb: TIP
"Parenting" is the act of letting the **Location**, **Rotation**, and **Scale** of the Parent object also be replicated on the Child object. *It's not exactly necessary to do before exporting*, but doing so would make importing and placing your models into Unity **a bit easier to do**.
:::

Finally comes exporting the saber itself. To do this, click `File>Export>FBX(.fbx)` (you can also export as an OBJ, either works). This will open a file browser window, similar to all the way back in **Step 1**. Find a good place to export your saber, and give it a name! Next, make sure your saber in all of it's parts are selected, turn on `Selected Objects` to export **just** the objects you have selected, and click `Mesh` in **Object Types**. This will *not only* make it so Blender will **only export the objects you have selected**, and then **only export the objects that are Meshes**, which your saber is.

<img src="https://github.com/user-attachments/assets/5895437f-0592-4387-a518-576e0351e2ad" width="750"/>
<hr>

After that, just click `Export FBX`, and **you're done!** You just made your very own saber model, and now you're ready to put it into [Unity to turn it into a functional Whacker to use in Beat Saber]().