pipeline{ 

  agent any

  tools {nodejs "node"}

  stages{
        
 //    stage('Cloning Git') {
 //      steps {
 //        git 'https://github.com/gustavoapolinario/node-todo-frontend'
 //      }
 //    }
        
    stage('Install dependencies') {
      steps {
        sh'apt-get install xvfb'
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'ELECTRON_RUN_AS_NODE=1 npm run cy:run'
      }
    }
        
  }
     post{
        success{
           publishHTML ([allowMissing: false,
           alwaysLinkToLastBuild: false,
           keepAll: true,
           reportDir: 'cypress/reports/html',
           reportFiles: 'index.html',
           reportName: 'HTML Report',
           ])
        }
     }
}

