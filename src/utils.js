export const processNetStat = (netStats) => {
  let connections = netStats.net_connections;
  const result = [
    ...connections
      .reduce((mp, o) => {
        if (!mp.has(o.process_name)) mp.set(o.process_name, { ...o, count: 0 });
        mp.get(o.process_name).count++;
        return mp;
      }, new Map())
      .values(),
  ];

  const filteredResults = result.filter((obj) =>
    Object.keys(obj).includes("process_name")
  );

  return filteredResults;
};

export const getTime = (dateStamp) => {
  return dateStamp.slice(14, 19);
};
