import { createAction } from 'redux-actions'

export let filterByName = createAction('FILTER_BY_NAME');

export let filterBySong = createAction('FILTER_BY_SONG');

export let filterByDate = createAction('FILTER_BY_DATE');