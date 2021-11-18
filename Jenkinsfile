pipeline {
    agent any

    tools {nodejs "17"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build:prod'
            }
        }
    }
}