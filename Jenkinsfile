#! groovy

pipeline {
    agent {
        kubernetes {
            defaultContainer 'java'
            yamlFile 'jnlp.yaml'
        }
    }

    stages {
        stage('Sonar Scanning') {
            steps {
                container('java') {
                    withSonarQubeEnv() {
                        sh './gradlew sonarqube'
                    }
                }
            }
        }

        // stage('Build Docker Image') {
        //     steps {
        //         container('trivy') {
        //             sh "auto/trivy.sh"
        //         }
        //     }
        // }

        // stage('Scan Docker Image') {
        //     steps {
        //         container('trivy') {
        //             sh "auto/trivy.sh"
        //         }
        //     }
        // }

        // stage('Push Docker Image') {
        //     steps {
        //         container('kaniko-crane') {
        //             sh 'auto/kaniko-push.sh'
        //         }
        //     }
        // }
    }
}
