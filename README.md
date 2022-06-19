# File Manager

### Start app

##### You must use this command to start app

```
npm run start -- --username=[user] // [user] is your username
```

Example:

```
npm run start -- --username=JoJo
```

### End app

```
Welcome to the File Manager, JoJo!

You are currently in C:\Users\JoJo

Enter command:
// use ctrl + c
Thank you for using File Manager, JoJo!
```

```
Welcome to the File Manager, JoJo!

You are currently in C:\Users\JoJo

Enter command: .exit
Thank you for using File Manager, JoJo!
```

### Navigation & working directory (nwd)

##### up

```
You are currently in C:\Users\JoJo\folder
Enter command: up

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: up
Invalid input: You can't go above root folder

You are currently in C:\Users\JoJo
Enter command:
```

---

##### cd

```
You are currently in C:\Users\JoJo
Enter command: cd folder

You are currently in C:\Users\JoJo\folder
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: cd unknowFolder
Invalid input: Folder not exist (C:\Users\JoJo\unknowFolder)!

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: cd ./folder

You are currently in C:\Users\JoJo\folder
Enter command:
```

```
You are currently in C:\Users\JoJo\folder
Enter command: cd ../

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: cd ../
Invalid input: You can't go above root folder

You are currently in C:\Users\JoJo
Enter command:
```

---

##### ls

```
You are currently in C:\Users\JoJo
Enter command: ls
Folder content:
  folder1
  folder2
  file1.txt
  file2.txt

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: ls
Folder is empty

You are currently in C:\Users\JoJo
Enter command:
```

---

### Basic operations with files

##### cat

```
You are currently in C:\Users\JoJo
Enter command: cat ./folder/text.txt
File content:
...
// content
...

You are currently in C:\Users\JoJo
Enter command:

```

##### add

```
You are currently in C:\Users\JoJo
Enter command: add newFile.txt
File created

You are currently in C:\Users\JoJo
Enter command:
```

##### rn

```
You are currently in C:\Users\JoJo
Enter command: rn file.txt newFileName.txt
File renamed

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: rn ./folder/file.txt newFileName.txt
File renamed

You are currently in C:\Users\JoJo
Enter command:
```

##### cp

```
You are currently in C:\Users\JoJo
Enter command: cp ./folder/file.txt ./otherFolder
File copied

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: cp file.txt ./otherFolder
File copied

You are currently in C:\Users\JoJo
Enter command:
```

##### mv

```
You are currently in C:\Users\JoJo
Enter command: mv ./folder/file.txt ./otherFolder
File moved

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: cp file.txt ./otherFolder
File moved

You are currently in C:\Users\JoJo
Enter command:
```

##### rm

```
You are currently in C:\Users\JoJo
Enter command: rm ./folder/file.txt
File deleted

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: rm file.txt
File deleted

You are currently in C:\Users\JoJo
Enter command:
```

---

### Operating system info

##### os

```
You are currently in C:\Users\JoJo
Enter command: os --EOL
EOL: \r\n

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: os --cpus
CPU count: 4
CPU-0: 3.09 GHz
CPU-1: 3.09 GHz
CPU-2: 3.09 GHz
CPU-3: 3.09 GHz

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: os --homedir
HOMEDIR: C:\Users\JoJo

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: os --username
USERNAME: JoJo

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: os --architecture
ARCHITECTURE: x64

You are currently in C:\Users\JoJo
Enter command:
```

### Hash calculation

##### hash

```
You are currently in C:\Users\JoJo
Enter command: hash ./folder/file.txt
FILE HASH: ...hash...

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: hash file.txt
FILE HASH: ...hash...

You are currently in C:\Users\JoJo
Enter command:
```

---

### Compress and decompress operations

##### compress

```
You are currently in C:\Users\JoJo
Enter command: compress ./folder/file.txt ./otherFolder
File compressed

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: compress file.txt ./otherFolder
File compressed

You are currently in C:\Users\JoJo
Enter command:
```

##### decompress

```
You are currently in C:\Users\JoJo
Enter command: decompress ./folder/file.br ./otherFolder
File compressed

You are currently in C:\Users\JoJo
Enter command:
```

```
You are currently in C:\Users\JoJo
Enter command: decompress file.br ./otherFolder
File compressed

You are currently in C:\Users\JoJo
Enter command:
```
