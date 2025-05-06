
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import cs from 'classnames'
const SearchResult: React.FC<{activeFilterId:string}> = ({
  activeFilterId
}) => {
      return (
        <section className={styles.search_result}>
              <div>{activeFilterId}</div>
        </section>
      );
    };
export default SearchResult;
