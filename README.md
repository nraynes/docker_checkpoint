This app is made to be submitted as a project for grading on a checkpoint for docker utilization and full stack app building.
This app is able to be viewed on mobile devices as well as desktops and laptops.

To run this app, simply type "docker-compose up" into the terminal while in the appropriate parent directory ("(path to parent folder)/docker-checkpoint"). 
(If you would like to run the app in the background, type in "docker-compose up -d", and the command to stop the app will be "docker-compose down")

To view this app, simply go to your browser and type in either "http://localhost:3000/"
or "http://127.0.0.1:3000/".

You should see a custom display message appear on the webpage!


To rebuild images, run the command "docker-compose build".

To rebuild images and run the app, run the command "docker-compose up --build".