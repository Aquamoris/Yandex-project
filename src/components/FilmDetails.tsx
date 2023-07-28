import {FunctionComponent, useEffect, useState} from "react";

interface Props {
    title: string;
    genre: 'comedy' | 'horror';
    seasonsCount: number;
}

export const FilmDetails: FunctionComponent<Props> = ({
                                                          title,
                                                          genre,
                                                          seasonsCount,
                                                      }) => {
    let [count, setCount] = useState(() => {return 0});
    useEffect( () => {
        console.log('count: ', count);
        return () => {}
    }, [count] );

    return (
        <div>
            <p>{title || 'Unknown Film'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Amount of seasons: ${seasonsCount}` : 'No seasons'}</p>
            <div>
                <button onClick={ () => {setCount(count - 1)} }>-</button>
                {count}
                <button onClick={ () => {setCount(count + 1)} }>+</button>
            </div>
        </div>
    );
};