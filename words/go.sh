for i in `ls .`
do
    echo "working on $i ..."
    sed -f changes.sed < $i > ${i}.tmp
    mv ${i}.tmp $i
done
