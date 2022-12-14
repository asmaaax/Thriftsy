import { Icon } from '@rneui/base';

export default function MyIcon(props) {
  return (
   
    
    
        <Icon
          color='#10c699'
          containerStyle={{margin: 10}}
          disabledStyle={{}}
          iconProps={{}}
          name={props.name}
          size={30}
          onPress={() => alert('Contact us')}
          type="font-awesome"
        />
   
  );
}

