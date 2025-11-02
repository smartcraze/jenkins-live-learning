pipeline {
    agent any
    
    stages {
        stage("Checkout") {
            steps {
                echo "Cloning repo"
                checkout scm
            }
        }

        stage("Install deps") {
            steps {
                sh '''
                bun install
                '''
            }
        }

        stage("Docker build and push") {
            steps {
                echo "Building and pushing Docker image"
            }
        }

        stage("Done") {
            steps {
                echo "Pipeline finished"
            }
        }
    }
}
