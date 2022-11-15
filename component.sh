#!/bin/bash
TYPE=$1
NAME=$2
DIR="src/components/${TYPE}s/${NAME}/"

# Create component directory
mkdir $DIR

# Create SCSS file scaffold
SCSS_FILE="${DIR}/index.scss"
touch $SCSS_FILE
echo ".${NAME}{}" >> $SCSS_FILE

# Create JS file scaffold
JS_FILE="${DIR}/index.js"
touch $JS_FILE
echo "const ${NAME^} = () => <></>" >> $JS_FILE
echo "export default ${NAME^}" >> $JS_FILE

# Import SCSS file to the global file
SCSS_GLOBAL_FILE='src/components/index.scss'
echo "" >> $SCSS_GLOBAL_FILE  
echo "@import './${TYPE}s/${NAME}/index.scss';" >> $SCSS_GLOBAL_FILE

# Import JS file to the global file
JS_GLOBAL_FILE='src/components/index.js'
echo "" >> $JS_GLOBAL_FILE
echo "import ${NAME^} from './${TYPE}s/${NAME}'" >> $JS_GLOBAL_FILE
echo "export { ${NAME^} }" >> $JS_GLOBAL_FILE
echo "" >> $JS_GLOBAL_FILE

# Output
echo "Scaffold for ${NAME} ${TYPE} has been created successfully!"