TITLE=$1
DESCRIPTION=$2

neo4j-shell -c "CREATE (n {title: '$TITLE', description: '$DESCRIPTION'});"