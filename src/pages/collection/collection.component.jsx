import React, {useContext} from 'react';
// import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

// import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  /* JUST leveraging initial state
  return (
    // difficult way : wrap whole component inside the ContextOjbect.consumer 
    <CollectionsContext.Consumer>
      {
        collections => {
          const collection = collections[match.params.collectionId];  // get the collection from the collections manuall no reselect
          const { title, items } = collection;
          return (
            <div className='collection-page'>
              <h2 className='title'>{title}</h2>
              <div className='items'>
                {items.map(item => (
                  <CollectionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          )
        }
      }
    </CollectionsContext.Consumer>
  );
  */

  // Easy way , using the useContext hooks
  const collections =  useContext(CollectionsContext) // gets the data from the context and stores ;
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );

};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

// export default connect(mapStateToProps)(CollectionPage);
export default CollectionPage;
