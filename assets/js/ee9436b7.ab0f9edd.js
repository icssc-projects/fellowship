"use strict";(self.webpackChunkfellowship=self.webpackChunkfellowship||[]).push([[883],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},155:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:3},s="Unit 3: Git Basics",u={unversionedId:"unit3",id:"unit3",title:"Unit 3: Git Basics",description:"Welcome to Unit 3",source:"@site/docs/unit3.md",sourceDirName:".",slug:"/unit3",permalink:"/course/unit3",editUrl:"https://github.com/icssc-projects/fellowship/tree/main/docs/unit3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Unit 2: Touching the Terminal",permalink:"/course/unit2"},next:{title:"Unit 4: Intro to Web Dev",permalink:"/course/unit4"}},p={},c=[{value:"Welcome to Unit 3",id:"welcome-to-unit-3",level:2},{value:"Unit 3 Lecture Video",id:"unit-3-lecture-video",level:2},{value:"Git",id:"git",level:2},{value:"\ud83e\udd14 Why git?",id:"-why-git",level:3},{value:"The Git Workflow",id:"the-git-workflow",level:3},{value:"Git Commands",id:"git-commands",level:3},{value:".gitconfig",id:"gitconfig",level:3},{value:".gitignore",id:"gitignore",level:3},{value:"SSH Keys",id:"ssh-keys",level:2},{value:"Why are we using SSH?",id:"why-are-we-using-ssh",level:3},{value:"To create an SSH Key",id:"to-create-an-ssh-key",level:3},{value:"Viewing your SSH Key",id:"viewing-your-ssh-key",level:3},{value:"Adding your SSH Key to GitHub",id:"adding-your-ssh-key-to-github",level:3},{value:"Assignment",id:"assignment",level:2},{value:"Due Date",id:"due-date",level:3},{value:"Submission",id:"submission",level:3},{value:"External Resources",id:"external-resources",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unit-3-git-basics"},"Unit 3: Git Basics"),(0,o.kt)("h2",{id:"welcome-to-unit-3"},"Welcome to Unit 3"),(0,o.kt)("p",null,"This week, we\u2019ll be combining what we\u2019ve done in the past 2 weeks, to learn more about Git, and how you can use it in your terminal."),(0,o.kt)("h2",{id:"unit-3-lecture-video"},"Unit 3 Lecture Video"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jFhAPcxPEfs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,o.kt)("h2",{id:"git"},"Git"),(0,o.kt)("h3",{id:"-why-git"},"\ud83e\udd14 Why git?"),(0,o.kt)("p",null,"And why not google drive? \ud83e\udd28\ud83d\udc4e"),(0,o.kt)("p",null,"A reason why Google Docs has become so popular because it made an easy way for a team to collaborate on a document together. A powerful tool Google Docs provides is ",(0,o.kt)("inlineCode",{parentName:"p"},"revision history")," which gives document owners a way to view and manage past versions of the document. This can be called ",(0,o.kt)("strong",{parentName:"p"},"version control.")),(0,o.kt)("p",null,"Git is the leading form of version control for source code. It is built around the importance of tracking changes and managing collaboration. These features make Git the right tool for programming small and large projects. "),(0,o.kt)("h3",{id:"the-git-workflow"},"The Git Workflow"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is a repository?")),(0,o.kt)("p",null,"A repository (also known as repo), is a collection of source code. It will contain all your project\u2019s files and revision history. "),(0,o.kt)("p",null,"When working with Git, there are 4 fundamental elements: ",(0,o.kt)("strong",{parentName:"p"},"Working Directory, Staging Area, Local Repo,")," and ",(0,o.kt)("strong",{parentName:"p"},"Remote Repo.")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Working Directory"),"  - Your working directory are the files on your computer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Staging Area"),"  - Once you make changes to a file, you can add it to the Staging Area, meaning that the file is ready to be committed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local Repo")," - Your local repo is stored on your computer, and is a clone of the Remote Repo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Remote Repo")," - The remote repo is the repository, but it\u2019s stored on a server miles away (such as GitHub).")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2b4c646-12fe-4373-a3bb-2d498724951b/Untitled.png",alt:"Git Workflow Image"})),(0,o.kt)("h3",{id:"git-commands"},"Git Commands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Commands"),(0,o.kt)("th",{parentName:"tr",align:null},"Function"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"git clone <remote_repo_url>"),(0,o.kt)("td",{parentName:"tr",align:null},"Creates a clone of the remote repository on your local computer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"git init"),(0,o.kt)("td",{parentName:"tr",align:null},"Create a new git repository (note: you don\u2019t need to do this if you use clone)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"git status"),(0,o.kt)("td",{parentName:"tr",align:null},"Lists all new or modified files to be committed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"git add <file_name>"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds specified files into the staging area, ready to be committed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'git commit -m "COMMIT_MESSAGE"'),(0,o.kt)("td",{parentName:"tr",align:null},"Commits the staged files into your local repository.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"git log"),(0,o.kt)("td",{parentName:"tr",align:null},"Prints the commit history of your current repository.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"git push"),(0,o.kt)("td",{parentName:"tr",align:null},"Pushes the commits on your local repository to the remote repository.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"git fetch"),(0,o.kt)("td",{parentName:"tr",align:null},"Updates ONLY your local repository with changes in the remote repository.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"git pull"),(0,o.kt)("td",{parentName:"tr",align:null},"Updates your local repository AND working directory with any changes from the remote repository.")))),(0,o.kt)("h3",{id:"gitconfig"},".gitconfig"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.gitconfig")," file lives in your root directory (not in a repo) and stores user-specific configuration. You\u2019ll want to update your email and name for this file by typing the following lines into your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Set your email and name\ngit config --global user.email "your_email@example.com"\ngit config --global user.name "FIRSTNAME LASTNAME"\n\n# Set your default branch to main (instead of master)\ngit config --global init.defaultBranch main\n\n# Verify your changes took effect\ngit config --list\n')),(0,o.kt)("h3",{id:"gitignore"},".gitignore"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file is a text file ",(0,o.kt)("strong",{parentName:"p"},"inside of a repository")," that tells Git which files or folders to ignore in a project."),(0,o.kt)("p",null,"Writing in this file follow patterns you can use. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"*"),"\xa0is used as a wildcard match"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/"),"\xa0is used to ignore pathnames relative to the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore"),"\xa0file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#"),"\xa0is used to add comments to a\xa0",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore"),"\xa0file")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Ignore Mac system files\n.DS_store\n\n# Ignore all text files\n*.txt\n\n# Ignore /env folder in same directory \n/env\n")),(0,o.kt)("h2",{id:"ssh-keys"},"SSH Keys"),(0,o.kt)("p",null,"SSH, also known as Secure Shell, is a way to let users access and authenticate to a computer remotely. SSH keys are used to authenticate users when trying to access other computers. With a pair of public and private keys, SSH can securely communicate remotely between machines. "),(0,o.kt)("h3",{id:"why-are-we-using-ssh"},"Why are we using SSH?"),(0,o.kt)("p",null,"When we are working with out GitHub repository, you will need to identify yourself with your username and personal access token. With SSH keys, you can connect to GitHub without supplying your username and password each time. To use SSH with GitHub, you will need to create the key, then add it to your GitHub account."),(0,o.kt)("aside",null,"\ud83d\udca1 As of August 13, 2021, [GitHub no longer supports https password authentication](https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/). You **must** use SSH moving forward."),(0,o.kt)("h3",{id:"to-create-an-ssh-key"},"To create an SSH Key"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Terminal"),(0,o.kt)("li",{parentName:"ol"},"Paste the text below, substituting in your GitHub email address:\n",(0,o.kt)("inlineCode",{parentName:"li"},"ssh-keygen -t ed25519 -C \u201cyour_email@example.com\u201d")),(0,o.kt)("li",{parentName:"ol"},"You can enter a passphrase or leave it blank.\nA passphrase is not necessary but can add additional security. If you add a passphrase, then you will need to type in that phrase every time you use ssh.\n",(0,o.kt)("em",{parentName:"li"},"(Personally, I don\u2019t use a passphrase)"))),(0,o.kt)("h3",{id:"viewing-your-ssh-key"},"Viewing your SSH Key"),(0,o.kt)("p",null,"You can now find your keys at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh"),"\nIf you used the ed25519 algorithm to create your key, you should see 2 files: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id_ed25519")," - Your ",(0,o.kt)("strong",{parentName:"li"},"private key. Do not share this")," \u274c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id_ed25519.pub")," - Your ",(0,o.kt)("strong",{parentName:"li"},"public key.")," This is what you share will GitHub \u2705")),(0,o.kt)("h3",{id:"adding-your-ssh-key-to-github"},"Adding your SSH Key to GitHub"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Display your public key using the ",(0,o.kt)("inlineCode",{parentName:"li"},"cat")," command.\n",(0,o.kt)("inlineCode",{parentName:"li"},"cat ~/.ssh/id_ed25519.pub")),(0,o.kt)("li",{parentName:"ol"},"Copy your public key to your clipboard. "),(0,o.kt)("li",{parentName:"ol"},"On ",(0,o.kt)("a",{parentName:"li",href:"http://github.com"},"github.com"),", click on your profile photo in the upper-right and then click settings. "),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"SSH and GPG Keys"),", and hit ",(0,o.kt)("strong",{parentName:"li"},"New SSH Key.")," "),(0,o.kt)("li",{parentName:"ol"},"In the title field, add a descriptive label, related to your computer, i.e. \u201cPersonal Mac\u201d"),(0,o.kt)("li",{parentName:"ol"},"Paste your public key into the \u201cKey\u201d field."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add SSH Key,")," and your key is now added to your GitHub Account. ")),(0,o.kt)("h2",{id:"assignment"},"Assignment"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required Tasks")),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Add your SSH Key to GitHub"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Clone your Profile README and push some changes (at least 1 new commit)."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Create a new repository for your personal website.",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Create an ",(0,o.kt)("inlineCode",{parentName:"li"},"index.html")," file"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"README.md")," file (it\u2019s ok if there\u2019s not much in there for now)")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"Stretch Goals")),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Create a ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," file in your personal website repo."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Add your SSH Key to OpenLab\nTo do this: ",(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/ChaseC99/9506cf219ca33c60693ea4c4396a4c19"},"connect to OpenLab")," and add your public ssh key as a newline in ",(0,o.kt)("inlineCode",{parentName:"li"},".ssh/authorized_keys"))),(0,o.kt)("h3",{id:"due-date"},"Due Date"),(0,o.kt)("p",null,"Monday, January 24 by 11:59pm"),(0,o.kt)("h3",{id:"submission"},"Submission"),(0,o.kt)("p",null,"Complete ",(0,o.kt)("a",{parentName:"p",href:"https://forms.gle/6MmqvLtr4YLWVhZV8"},"Google Form"),"."),(0,o.kt)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSdRh6buY0w8TXrVPmjbXhKJ1gf0Kj-jVdidq4ftt2wfkC7fjg/viewform?embedded=true",width:"640",height:"1056",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),(0,o.kt)("h2",{id:"external-resources"},"External Resources"),(0,o.kt)("p",null,"Git"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/docs"},"Git Reference")),(0,o.kt)("li",{parentName:"ul"},"Git Cheat Sheet: ",(0,o.kt)("a",{parentName:"li",href:"https://education.github.com/git-cheat-sheet-education.pdf"},"Git Cheat Sheet"))),(0,o.kt)("p",null,"SSH"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to create a new SSH Key: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"Create SSH Key Documentation")),(0,o.kt)("li",{parentName:"ul"},"How to add an SSH Key to GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account"},"Add SSH Key Documentation"))))}d.isMDXComponent=!0}}]);