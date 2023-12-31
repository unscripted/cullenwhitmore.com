/**
 * Internal dependencies
 */
import initBlock from '../utils/init-block';
import metadata from './block.json';
import edit from './edit';
import variations from './variations';

const { name } = metadata;
export { metadata, name };

export const settings = {
	edit,
	variations,
};

export const initChildPageNavigationLink = () => initBlock( { name, metadata, settings } );
