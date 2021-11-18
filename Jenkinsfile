pipeline {
    agent any

    tools {nodejs "nodeJS@12"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build:prod'
            }
        }
    }
}