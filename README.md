# team-codeop-athena-hack
Team CodeOp's repo for Athena Winter Hackathon

1. [Projet Objective](#objective)
2. [Installation](#installation)
3. [Create Staging Branch on Your Local Repo/Computer](#create-staging)
4. [Start New Component/Feature](#create-branch)

## <a name="objective">Project Objective:</a>



## <a name="installation">Installation</a>

    note: This prototype uses the (yarn)[https://yarnpkg.com/] package manager. 

    If you are using Windows, to make life easy be sure you are using [Git Bash](https://git-scm.com/downloads) and not Windows Powershell, or Windows Command Terminal. Each has their own command syntax.

    1. On GitHub for [this repo](https://github.com/lucidInsomniac/team-codeop-athena-hack.git), click on the "Fork" icon that looks like a "Y". This creates a your copy on your GitHub.

    2. Click on the green "Code" button, and copy the URL from your version on GitHub.

    3. On your computer, open Git Bash, and find, or create a folder to clone your copied repo.

            mkdir project-folder

             cd project-folder

             git clone https://github.com/yourUsername/team-codeop-athena-hack.git

    4.  Once the repo clones successfully, change into the project folder:

            cd team-codeop-athena-hack

    5. Since we are using yarn, initiate yarn to allow adding dependencies. 

            yarn

    6. Add team repo to your remote connection, and check it got added:

            git remote add team https://github.com/lucidInsomniac/team-codeop-athena-hack.git

            git remote -v

        You should see two listed for "origin", this is your GitHub copied version. This is where you will push to staging.

        There will also be two listed as "team". this is your team repo. This is where you will pull before, and after every pull and push.


## <a name="create-staging">Create Staging Branch on Your Local Repo/Computer</a>

    1. Create a new branch on your local repo/ your computer, called "staging" and switch into this branch. This is where all the changes will go.

            git checkout -b staging

    2. Save the changes to your local repo and commit.

            git add .

            git commit -m "created staging branch"

    3. Push your new staging branch on your local repo/computer to your remote repo/GitHub. This will create a new staging branch on your GitHub:

            git push origin staging

    4. On your GitHub, a pop-up with a green button will appear with something like "Compare & Pull Request". Click confirm these merges but DO NOT DELETE when it pops up with the purple indicator. 

## <a name="create-branch">Create New Component/Feature</a>
