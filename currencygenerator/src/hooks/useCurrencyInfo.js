import { useEffect, useState } from "react";

function useCurrencyInfo(currency = "USD") {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://v6.exchangerate-api.com/v6/00ae4f3514800824da3bcd54/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [currency]);

  return { data, loading };
}

export default useCurrencyInfo;
