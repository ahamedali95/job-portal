pipeline {
    agent none

    tools {nodejs "nodeJS@12"}

    stages {
        stage('Build') {
            agent any
            steps {
                echo "Build stage is running..."
                sh 'npm install'
                sh 'npm run check:typings'
                sh 'npm run lint'
                sh 'npm run build:prod'
            }
        }
        stage('Test') {
            agent any
            steps {
                echo "Tests are running..."
                sh 'npm run test'
            }
        }
        stage('Deploy to Dev') {
            when {
                beforeInput true
                not {
                    branch "master"
                }
            }

            input {
                message "Press Ok to continue"
            }

            steps {
                echo "Deploying to Dev"
                sh 'npm run deploy:dev'
            }
        }
    }
}