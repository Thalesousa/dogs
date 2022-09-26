import React from 'react';
import { Head } from '../Helper/Head';
import { useFetch } from '../../Hooks/useFetch';
import { useEffect } from 'react';
import { STATS_GET } from '../../api';
import Loading from '../Helper/Loading';
import { Error } from '../Helper/Error';
import { UserStatsGraphs } from './UserStatsGraphs';

export function UserStats() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <div>
        <Head title="Estatistica" />
        <UserStatsGraphs data={data} />
        <div>Estatistica</div>
      </div>
    );
  } else return null;
}
