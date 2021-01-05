#! groovy

pipeline {
    agent {
        kubernetes {
            defaultContainer 'java'
            yamlFile 'jnlp.yaml'
        }
    }

    environment {
        GITHASH = GIT_COMMIT.take(7)
        DOCKER_BACKEND_IMAGE = "729601114034.dkr.ecr.ap-northeast-1.amazonaws.com/insecurity-backend"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                container('kaniko-crane') {
                    sh '''
                    /kaniko/executor --dockerfile=`pwd`/docker/Dockerfile.backend --context `pwd` \
                        --no-push --destination=backend:latest --tarPath image.tar
                    '''
                }
            }
        }

        stage('Scan Docker Image') {
            steps {
                container('trivy') {
                    sh '''
                    trivy image --exit-code 0 --severity MEDIUM --no-progress --input image.tar
                    trivy image --exit-code 1 --severity HIGH,CRITICAL --no-progress --input image.tar
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                container('kaniko-crane') {

                    sh '''
                    mkdir -p ~/.docker
                    echo '{ "credsStore": "ecr-login" }' > ~/.docker/config.json

                    /kaniko/crane push image.tar ${DOCKER_BACKEND_IMAGE}:${GITHASH}.${BUILD_NUMBER}
                    /kaniko/crane push image.tar ${DOCKER_BACKEND_IMAGE}:latest_en
                    '''
                }
            }
        }
    }
}
