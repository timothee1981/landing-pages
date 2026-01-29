============================================================
             MUSIC LANDING PAGES - GETTING STARTED
============================================================

Welcome! This file will help you understand how to work with 
this project, even if you're completely new to coding.


------------------------------------------------------------
WHAT ARE .MD FILES?
------------------------------------------------------------

The files README.md and DOCUMENTATION.md are "Markdown" files.
They contain formatted text documentation.

HOW TO VIEW .MD FILES:

Option 1: In VS Code (Recommended)
  1. Open the .md file (double-click it)
  2. Press Ctrl+Shift+V (Windows) or Cmd+Shift+V (Mac)
  3. This opens a nice preview with formatting

Option 2: Online
  1. Go to https://markdownlivepreview.com/
  2. Copy and paste the content of the .md file
  3. See the formatted preview on the right

Option 3: In GitHub
  - If you upload the project to GitHub, .md files are
    automatically displayed with nice formatting


------------------------------------------------------------
HOW TO OPEN A COMMAND LINE / TERMINAL
------------------------------------------------------------

A "terminal" or "command line" is where you type commands
to install and run the project.


*** IN VS CODE (EASIEST) ***

Method 1 - Keyboard Shortcut:
  - Press Ctrl+` (the key above Tab, next to 1)
  - A terminal panel will open at the bottom

Method 2 - Menu:
  - Click "View" in the top menu
  - Click "Terminal"

Method 3 - Command Palette:
  - Press Ctrl+Shift+P (Windows) or Cmd+Shift+P (Mac)
  - Type "Terminal: Create New Terminal"
  - Press Enter


*** ON WINDOWS (Without VS Code) ***

Method 1 - Address Bar Trick (EASIEST!):
  1. Open File Explorer
  2. Navigate to the MusicLandingPages folder
  3. Click on the address bar at the top (where you see the folder path)
  4. Type: cmd
  5. Press Enter
  --> Command Prompt opens directly in that folder!

Method 2 - Right-Click Menu:
  1. Open File Explorer
  2. Navigate to the MusicLandingPages folder
  3. Right-click on an empty area inside the folder
  4. Click "Open in Terminal" or "Open PowerShell window here"
     (If you have Git: "Open Git Bash here" also works)

Method 3 - From VS Code (if project is already open):
  Just use the VS Code terminal (Ctrl+`) - you're already
  in the right folder!


*** ON MAC ***

Method 1 - Finder:
  1. Navigate to the MusicLandingPages folder
  2. Right-click on the folder
  3. Hold Option key and click "Copy [folder] as Pathname"
  4. Open Terminal (from Applications > Utilities)
  5. Type: cd 
  6. Paste the path and press Enter

Method 2 - Spotlight:
  1. Press Cmd+Space
  2. Type "Terminal" and press Enter
  3. Type: cd /path/to/MusicLandingPages
     Example: cd ~/Documents/MusicLandingPages


------------------------------------------------------------
NEXT STEPS
------------------------------------------------------------

Once you have a terminal open:

1. Read DOCUMENTATION.md for full setup instructions
   (or view it with Ctrl+Shift+V in VS Code)

2. The Quick Start commands are:
   
   npm install      <-- Install the project (run this first!)
   npm run dev      <-- Start the development server

   IMPORTANT: If you opened VS Code with this project and 
   opened the terminal there, you are ALREADY in the correct
   folder. Do NOT run "cd MusicLandingPages" - it will fail!
   
   Just run "npm install" directly.

3. If these commands don't work, you need to install Node.js
   See DOCUMENTATION.md for installation instructions


------------------------------------------------------------
ABOUT CONTACT FORMS
------------------------------------------------------------

You have OPTIONS! Check DOCUMENTATION.md section "Choose Your Path":

EASIEST: Use Contact4.astro
   - Just change one email address
   - Opens visitor's email app (Gmail, Outlook, etc.)
   - NO signup, NO .env file, NO API keys!

EASY: Use Formspree.io
   - Free service, paste their form code
   - Real contact form without any coding

ADVANCED: Use Resend
   - More powerful but requires technical setup
   - Only choose this if you're comfortable with code


------------------------------------------------------------
NEED HELP?
------------------------------------------------------------

- See DOCUMENTATION.md for complete instructions
- The Troubleshooting section has solutions for common issues
- All installation guides are in the documentation


============================================================
