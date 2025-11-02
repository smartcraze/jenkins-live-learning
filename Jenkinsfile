
pipeline {
    agent any

    stages{
        stage("checkout code"){

            steps {
                echo 'Clonning the repository'
                sh 'git clone https://github.com/smartcraze/jenkins-live-learning.git'
            }
            steps{
                sh 'bun install'
            }
            steps{
                echo 'pipeline finished'
            }


        }
        stage(" docker build and push "){
            steps{
                echo 'docker login'
            }
            steps{
                echo 'docker build'
            }
            steps{
                echo 'docker tag'
            }
            steps{
                echo 'docker push'
            }
        }

        stage("finished"){
            steps{
                echo 'finished pipeline'
            }
        }

    }
    
}