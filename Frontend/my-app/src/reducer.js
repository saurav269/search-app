

  const reducer = (state, action) =>{

        switch(action.type){
            case "GET_DATA" :
            return {
                ...state,
                isLoading : false,
                data : action.payload.data,
            };

            case 'SET_LOADING':
                return {
                    ...state,
                    isLoading : true,
                };

                case 'SEARCH_DATA':
                    return {
                        ...state,
                        keyword : action.payload
                    }
        }
         return state;
  };

  export default reducer