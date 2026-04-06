# App Design Document

## App Name
Mystery Museum

## Plan
My plan for the final project is to make an app dedicated to my Minecraft mods and make it as unique and vivid as possible. I will be including all of the mods I have made up to this point along with ones still in development and for future ideas.

For sortment, the title screen would contain a selection of cards. Each card contains a group of mods, starting with "All Mods," "The Big Ones," "Country Balls Project," "Future Projects," and "Mod Roulette." Each card will take you to the corresponding screen equipped with a search bar at the top to filter out mods, minus the "Mod Roulette" screen.

All Mods: This screen contains all of the mods I have made, each one being contained in a card. The screen also has a button that takes you straight to the "Mod Roulette" screen.

Each mod has it's own screen containing images, videos, and download links to the corresponding mod. Descriptions will be included along with step-by-step instructions on how you would install the mod in Minecraft. The download button will either take the user to GitHub or MediaFire, depending on the size of the mod.

The Big Ones: This screen, also know as the popular mods, will display the mods that have the most content built into them.

Country Balls Project: This screen shows the Country Balls mod and explains what the project is and the long-term goal for it. The screen contains the demo of the mod plus the Spain Ball and Japan Ball to download.

Future Projects: This screen displays the projects that are still in development or will be made in the future. Comes with the ideas, descriptions, and images of each mod. These are not downloadable.

Mod Roulette: This is a neat mechanic added into the app that picks a random mod for the user to view. The mod chosen goes to their corresponding mod screen.

## Problem Statement
Modding in Minecraft has been around for a long time to the point where it is now part of the game itself. It serves as a creative space for those with endless ideas and as a learning platform for aspiring programmers. Minecraft mods introduce new entities or gameplay mechanics that make the main game a whole lot more interesting and entertaining.

## Target Users
- Minecraft Players
- Mod Creators
- Programmers

## Core Features
The app will be user friendly with pressable buttons and cards. Additional features include search bars, videos, slideshows, and download buttons.

## User Interaction Flow
1. The user opens the app which leads to the title screen.
2. From there, they will have the options to choose from multiple categories.
3. Click on a mod card to view it.
4. The user can browse the details (images, videos, etc.) and can choose to download the mod from there.

## Components
- App
- Header
- ItemList
- ItemCard
- ScrollView

## State and Data
Data will consist of a list of items as well as an array of task objects.

## Stretch Goals
If time allows it, additional features I would add would be an about me screen, possibly links to other Minecraft mod websites such as Planet Minecraft and MCPEDL.