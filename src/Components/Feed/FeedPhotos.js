import React from 'react';
import { FeedPhotosItem } from './FeedPhotosItem';
import { useFetch } from './../../Hooks/useFetch';
import { useEffect } from 'react';
import { PHOTOS_GET } from '../../api';
import { Error } from './../Helper/Error';
import Loading from './../Helper/Loading';
import styles from './FeedPhotos.module.css';

export function FeedPhotos({ setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else return null;
}
