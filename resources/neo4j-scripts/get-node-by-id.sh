ID=$1

neo4j-shell -c "MATCH (n) WHERE ID(n)=$1 RETURN n;"