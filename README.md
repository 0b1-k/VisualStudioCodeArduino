![arduino upload](/pics/uploadx600.png)

# Using Visual Studio Code as an Arduino IDE

The *arduino IDE* is great to get a project configured and started quickly, but 
its built-in code editor leaves a lot to be desired. Even though an external editor
can be used instead, the experience could still be improved upon.
With the release of [*Visual Studio Code*](https://code.visualstudio.com/) for Linux,
Windows and Mac OS, there's an opportunity to make coding for *arduino* enjoyable while
preserving the ability to compile and upload sketches directly from the editor. 
Keep in mind that you'll still need to use the *arduino* environment at least once to manage
a project's imported libraries, target boards settings, serial port settings, etc.

The following document describes how this can be accomplished in three easy steps.

## 1. Making the 'arduino' executable available

By default, the *arduino* environment on Linux is not visible outside of its
installation directory and needs to be exposed as a command for *Visual Studio Code* 
to invoke it when compiling and uploading *arduino* sketches. 

Skip this step if the *arduino* environment is already available from anywhere.

The following step creates a symbolic link to the *arduino* 
environment so that it can be accessed from anywhere. It is assumed that the 
*arduino* environment was installed in the user's /home directory, such as:

```
~/arduino-1.6.4
```

Switch to the */usr/bin* folder and create a symbolic link named *arduino* pointing to
the *arduino* installation folder.

```
cd /usr/bin
sudo ln -s ~/arduino-1.6.4/arduino arduino
```

Check that the symbolic link is correct by starting the *arduino IDE* from the command line.
The *arduino IDE* should start normally. Just close it when done.

```
cd /
arduino
```

On Windows, just ensure that the *arduino* environment is part of the PATH.

## 2. Copy the *vs.language.ino* folder to the *Visual Studio Code* plugins folder

The *vs.language.ino* folder in this repository provides *Visual Studio Code* with the 
*arduino* keyword definitions needed for syntax highlighting. It also specifies that 
*.ino* files should be handled as C/C++ files.

The commands assume that *Visual Studio Code* was installed in the user's */home* folder.
It is also assumed that the *Visual Studio Code for Arduino* repository was cloned 
to the user's */home* folder. 

The repository contains the following files & folders:

```
-rw-rw-r-- 1 fabien fabien 7652 Oct  1 18:05 LICENSE
drwxrwxr-x 2 fabien fabien 4096 Oct  2 17:07 pics
-rw-rw-r-- 1 fabien fabien 3787 Oct  2 17:30 README.md
-rw-rw-r-- 1 fabien fabien 1999 Oct  2 13:06 tasks.json
drwxr-xr-x 3 fabien fabien 4096 Oct  2 13:49 vs.language.ino
```

Copy *vs.language.ino* to *Visual Studio Code*'s plugins folder with your file manager or
the following command:

```
cp -r ~/VisualStudioCodeArduino/vs.language.ino ~/VSCode-linux-x64/resources/app/plugins
```

## 3. Adding the *Visual Studio Code* *Task Runners* supporting *arduino*

From *Visual Studio Code*, do the following:

1. Open the *File* menu and select *Open Folder...*.
2. Navigate to the folder containing your *arduino* projects.
3. Bring up the command palette with *Ctrl+Shift+P*.
4. Type *task* in the command window.
5. Select *Configure Task Runner*. This will create a hidden folder named *.vscode* at
the root of the *arduino* projects folder selected in *step 2*. ![command palette](/pics/ConfigureTaskRunner.png)
6. Replace *.vscode/tasks.json* with *~/VisualStudioCodeArduino/tasks.json*.
7. Restart *Visual Studio Code*

The configuration of *Visual Studio Code* is now complete and it is ready for use with *arduino* 
*.ino* project files.

## 4. Usage

1. Open a *.ino* project file.
2. Bring up the command palette with *Ctrl+Shift+P*
3. Type *task* in the command window.
4. Select *Run Task*

![command palette](/pics/ArduinoTasksSelection.png)

Select *--verify* to verify/compile the *arduino* project. Alternatively you 
can use *Ctrl+Shift+B* as a shortcut.

If problems occur when compiling the project, they will be visible in the lower-left
corner of the editor

![indicators](/pics/ProblemIndicators.png)

Clicking on the *error* or *warning* icon will bring up the list of problems

![problems](/pics/problems.png)

Clicking on a problem will highlight it within the *.ino* file.

Alternatively, bringing up the output with *Ctrl+Shift+P* + *view: show ouput* will
show the complete, verbose, compilation results.

![compile output](/pics/compilex600.png)

Select *--upload* to verify/compile & upload the *arduino* sketch to the target board.
This will always bring up the output.

![upload output](/pics/uploadx600.png)

Finally, there's currently no good way to bring up the native *arduino* serial monitor externally.
Instead, bring up a terminal window with *Ctrl+Shift+C* and use a different terminal emulator,
such as *minicom*.

![terminal](/pics/terminalx600.png)

### Note

This procedure has been validated to work with the following configuration:

* *Ubuntu Linux 14.04 LTS*
* *arduino 1.6.4*
* *Visual Studio Code 0.8.0*
