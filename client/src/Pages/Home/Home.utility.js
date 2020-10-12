import React, { useEffect, useRef} from 'react';

export function validateFilterValueChanges(prevFilters, newFilters){
    if(prevFilters != undefined){
        if(prevFilters.titleSearch != newFilters.titleSearch)
            return true;
        if(prevFilters.genre != newFilters.genre)
            return true;
        if(prevFilters.releaseDate != newFilters.releaseDate)
            return true;
        if(prevFilters.rating != newFilters.rating)
            return true;
        if(prevFilters.language != newFilters.language)
            return true;
        if(prevFilters.sortBy != newFilters.sortBy)
            return true;
    }
    
    return false;
}

export function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}