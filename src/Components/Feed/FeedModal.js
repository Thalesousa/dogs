import React, { useEffect } from 'react';
import styles from './FeedModal.module.css';
import { useFetch } from './../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import { Error } from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PhotoContent } from '../Photo/PhotoContent';

export function FeedModal({ photo }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
