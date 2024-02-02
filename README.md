# uriHW10OOPLogoGenerator
uri bootcamp HW 10 OOP Shape SVG Logo Generator - MJS Due 2.1.24
Michael Sheliga - This repo is for the University of Richmond (URI) coding bootcamp.   

## Link to Repo, Screenshot(s) and/or Video(s)
Link to GitHub Repo: https://github.com/msheliga1/uriHW10OOPLogoGenerator    
<!---  Link to deployed github.io site. https://msheliga1.github.io/uriHW9NodeReadmeGen --->  
Link to logo.svg: https://github.com/msheliga1/uriHW10OOPLogoGenerator/blob/main/examples/logo.svg     
Link to Video on Google Drive: https://drive.google.com/file/d/1nLvEaC9at3JhJc0knj-ZJ8N_nNKHrIT9/view?usp=sharing  
Link to Video on GitHub [Link](./examples/hw10LogoGenSheliga.webm)   Note that this video may be too large to play in GitHub, so you will need to download and play from your computer. WindowsMediaPlayer worked for me.   

[Link to Acceptance Criteria ](#acceptance-criteria)   

## Project Goals     
Use node, inquirer and Object Oriented Inherited classes  to create an SVG log usingn answers to inquirer prompts.  

========================================================   
## Technical Project Details    
========================================================    
## Github:   
    Create Repo (github, repositories => New)   
        - Dont Make this a shared repo.  
    Copy directories and sample files from prior project (or create from scratch).  
        -- No starter code. No need for copying one file at a time via command line.  
        -- Alternate: Go to Demo (root) folder, download zip, moving to local repo, unzip - likely fastest method.     
        -- Could not find a better way to copy over all files.    
    OR ... create HTML, Node, Develop, CSS and javascript, etc. from scratch, and copy sample files ... worked well.
        Branches (Optional for single programmer projects)  
        - Could do work in branches. (new branch inside gitHub)    
        - All branch names will begin with the initials of the main person working on the branch.  
        - Must update local repo after adding a branch  
        - Switch to branch: From cmd line git switch <branchname>   
        - Once changes committed, git push origin <branchname>  
            - for pushing to remote test branch: git push origin local_branch:remote_branch  
        - Issue a pull request in gitHub.  
        - Click "Pull Requests" in top menu bar (3rd from left).  
        - Click "review Required" in small font below pull request name.  
        - You may approve your own request.  
    Clone to local machine (Copy https, then git clone paste).    
    Create a nice long READ.md file!!  (Modify prior projects.)   
    NPM: Do "npm init --y" BEFORE "npm install" to avoide ENOENT err.
        Do "npm install inquirer@8.2.4" (with old version) to avoid require error.
        Jest: Seem to need to hand edit package.json so "test" is "jest".  Also NPM install jest --save-dev. npm run test.
    Commit and push files back to gitHub/branch. (For multi-programming: Issue pull request, approve, merge).  
    Deploy code (Settings...CodeAndAnimation->Pages on left, GitHub Pages->Branch->main, save)  
        - Deployed code name always msheliga1/github.io/RepoName !!  
    Make Sure it Works   
    Insert Video and/or Screenshot X2 of deployment into readme file. 
  
## Tools and Technologies Used   
    Github - Branches not needed, but could use.  
        - GitIgnore to keep NPM libraries out of gitHub repo.  
    NPM - Node Package Manager  
        fs - fileSystem    
        inquirer - Used for prompts (text, list, checkboxes, editor, etc.)   
    Jest - unit testing  
    SVG - yet another image file format  
    Agile - Try to assign a little work at a time.   

## Acceptance Criteria   
-----------------------   
LOGO generator for simple SVG logos  
  
Command-line inquirer app for input  
1. Name up to three characters  
2. Text color keyword (OR a hexadecimal number)  
3. Shape: circle, triangle, and square  
4. Shape's color: color keyword (OR a hexadecimal number)  
SVG file is created named `logo.svg`  
Text "Generated logo.svg" is printed in the command line  
`logo.svg` file in a browser - 300x200 pixel image  
