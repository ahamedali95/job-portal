pipeline {
    agent any

    tools {nodejs "nodeJS@12"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run check:typings'
                sh 'npm run lint'
                sh 'npm run build:prod'
            }
        }
        stage('') {
            steps {
                sh 'npm run test'
            }
        }
    }
}