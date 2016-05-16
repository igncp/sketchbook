TITLE=$1

neo4j-shell -c "START n = node(*) WHERE n.title =~ '.*$1.*' RETURN n.title, n;"