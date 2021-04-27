import { useRouter } from 'next/router';
import React, {
  useState,
  ChangeEvent,
  FormEventHandler,
  SyntheticEvent,
} from 'react';

export const Search = () => {
  const [term, setTerm] = useState('');

  const router = useRouter();

  return (
    <form
      onSubmit={(e: SyntheticEvent) => {
        e.preventDefault();
        router.push(`/houses/search?term=${term}`);
        setTerm('');
      }}>
      <input
        type='text'
        onChange={e => setTerm(e.target.value)}
        placeholder='search'
      />
    </form>
  );
};
