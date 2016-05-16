TITLE=$1
DESCRIPTION=$2
ID=$3
LINK_TEXT=$4

neo4j-shell -c "MATCH (n) WHERE ID(n) = $3 CREATE (m {title: '$1', description: '$2'})-[:$4]->(n);"
