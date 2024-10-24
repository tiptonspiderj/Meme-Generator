# Meme Generator

This is a meme generator where you can customize the text on the top and bottom of the images randomly presented.  A meme generator is a 
digital tool that allows users to create hilarious, relatable, and shareable images by combining text with visuals. These tools typically 
offer easy-to-use interfaces where you can select from a variety of popular meme templates. Add your witty captions and voilà—you have a 
meme ready to go viral! Whether you’re aiming to entertain your friends, make a social comment, or just pass the time, a meme generator 
puts the power of internet humor at your fingertips. How's that for quick creativity?

## Description

This project was made using Visual Studio Code for the IDE along with React and Vite for compiling the code. This application reaches out to the [imgflip API](https://imgflip.com/api) for the random images displayed in the application.
The text fields are cleared out every time you request a new image.  

## Getting Started
 
 Click on the image below to see the live website.

[![application images](https://github.com/tiptonspiderj/Meme-Generator/blob/main/public/meme.png)](https://tiptonspiderj1-meme-generator.netlify.app/)

### Installing for Windows

You can clone this repository and save it onto your local computer.  Then extract the files from the zip file.  From there, open up the folder location with Visual Studio Code and run it with the live server extension.  However, you will have to make sure you have NPM installed onto your local machine first and run the following commands in your terminal within Visual Studio Code: 
```
npm install
npm run dev
```
or combine the terminal commands like:
```
npm install && npm run dev
```
If you don't know whether or not NPM is installed on your computer, type "npm -v" into your command terminal first.  It should return a number if it is installed.  You also have to ensure you are in the right folder directory of this project if you receive an error in the terminal within Visual Studio Code.

### Dependencies

The dependencies are React and the Vite compiler.  I also used Visual Studio Code to make the project from scratch.  Because of the API calls and React used in the project, it must be run in a server environment.  Visual Studio Code makes this really easy if you enable the "Live Server" extension.  If you have questions about that, you can find sources on how to enable the extension on YouTube.
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Background Color | ![#16081b](https://imageplaceholder.net/10x10/16081b) #16081b |
| Purple Color | ![#672280](https://imageplaceholder.net/10x10/672280) #672280 |
| Purple Color | ![#a626d3](https://imageplaceholder.net/10x10/a626d3) #a626d3 |
| Text Color | ![#ffffff](https://imageplaceholder.net/10x10/ffffff) #ffffff |

## Authors

Contributor's names and contact info

Jeremy Tipton  
[@tiptonspiderj1](https://tiptonspiderj1.com)

## Version History

* 1.0.0
    * Initial Release

## Feedback

If you have any feedback, please reach out to me at tiptonspiderj1@aol.com

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Scrimba](https://img.shields.io/badge/scrimba-2B283A?style=for-the-badge&logo=scrimba&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)

### Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)
1

### React + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
