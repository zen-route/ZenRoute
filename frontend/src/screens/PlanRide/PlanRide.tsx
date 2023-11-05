/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Alert} from 'react-native';
import Header from '../../components/Header';
import {HomeRoutes} from '../../navigation/HomeRoutes';
import {StackNavigationProps} from '../../navigation/AppRoutes';
import CustomTextInput from '../../components/Input';
import FancyButton from '../../components/FancyButton';
import {getCoordsFromPlace} from '../../utils/getCoords';
import getPropertyFromPrompt from '../../utils/getPropertiesFromPrompt';
import Loading from '../../components/Loading';
import axiosInstance from '../../services/axiosInstance';
import getRecommenedPaths from '../../utils/getRecommenedPaths';
import useAuthStore from '../../store/AuthStore';
const PlanRide = ({
  navigation,
}: StackNavigationProps<HomeRoutes, 'PlanRide'>) => {
  const [source, setSource] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [userPrompt, setUserPrompt] = React.useState('');
  const setPaths = useAuthStore(state => state.setPaths);
  const setSourcee = useAuthStore(state => state.setSource);
  const setDestinationn = useAuthStore(state => state.setDestination);
  //   const [currentCategory, setCurrentCategory] = React.useState('' as string);
  //   const [currenttimeConstraint, setTimeConstraint] = React.useState('');
  //   const [currentadditionalConstraints, setAdditionalConstraints] =
  //     React.useState([] as string[]);
  const [loading, setLoading] = React.useState(false);
  //   const [sourceCoords, setSourceCoords] = React.useState();

  const handleRoutesAPICall = async (category, time, aC, coords, dest) => {
    console.log('CC: ', category);
    console.log('CT: ', time);
    console.log('CAD: ', aC);
    console.log('SC: ', coords);
    console.log('DEST: ', dest);

    // const data = {
    //   // @ts-ignore
    //   source_lon: sourceCoords[0],
    //   // @ts-ignore
    //   source_lat: sourceCoords[1],
    //   destination: destination,
    //   time: currenttimeConstraint,
    //   categories: currentCategory,
    // };
    // console.log('DATAAAA: ', data);

    // remove other characters from time if any and then convert to int
    const timeConstraintt = parseInt(time.replace(/[^0-9]/g, ''), 10);
    try {
      const res = await axiosInstance.post('/locations/route/', {
        // @ts-ignore
        source_lon: coords[0],
        // @ts-ignore
        source_lat: coords[1],
        destination: destination,
        time: timeConstraintt,
        categories: category,
      });

      console.log('PATHHHHHHH: ', res.data);
      const indices = await getRecommenedPaths(res.data, aC);
      console.log('INDICESSSS: ', indices);
      const recommendedPaths = indices.map(ind => res.data[ind]);
      setPaths(recommendedPaths);
      setSourcee(source);
      setDestinationn(destination);
      navigation.navigate('RecommendedPaths');
    } catch (err) {
      console.log('ERROR WHILE FETCHING DESIRED PATH: ', err);
    }
  };

  const handleMainProcess = async () => {
    setLoading(true);
    const sourceRes = await getCoordsFromPlace(source);
    const destinationRes = await getCoordsFromPlace(destination);
    const sourceCoordss = [sourceRes.lon, sourceRes.lat];
    const destinationCoords = [destinationRes.lon, destinationRes.lat];
    // setSourceCoords(sourceCoordss);
    console.log('SOURCE COORDS: ', sourceCoordss);
    console.log('DESTINATION COORDS: ', destinationCoords);

    const {categories, timeContraint, additionalConstraints} =
      await getPropertyFromPrompt(userPrompt);

    // setCurrentCategory(categories);
    // setTimeConstraint(timeContraint);
    // setAdditionalConstraints(additionalConstraints);

    Alert.alert(
      'Confirmation',
      `Your route is ${source} to ${destination} with categories ${categories} and time constraint ${timeContraint} and additional constraints ${additionalConstraints}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Proceed',
          onPress: () =>
            handleRoutesAPICall(
              categories,
              timeContraint,
              additionalConstraints,
              sourceCoordss,
              destination,
            ),
        },
      ],
      {cancelable: false},
    );
    setLoading(false);
  };
  return !loading ? (
    <View style={{backgroundColor: 'white'}}>
      <Header
        onBack={() => {
          navigation.goBack();
        }}
        theme="BLUE"
        text="Plan Ride"
      />
      <View
        style={{
          paddingHorizontal: 5,
          paddingVertical: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1947E5',
        }}>
        <View style={{width: '80%'}}>
          <CustomTextInput
            placeholder="Enter Source"
            onTextChange={setSource}
            type="ascii-capable"
          />
        </View>
        <View style={{width: '80%', marginTop: 20}}>
          <CustomTextInput
            placeholder="Enter Destination"
            onTextChange={setDestination}
            type="ascii-capable"
          />
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}>
        <View style={{width: '80%', marginTop: 130}}>
          <CustomTextInput
            placeholder="What are you looking for...."
            onTextChange={setUserPrompt}
            type="ascii-capable"
            numOfLines={5}
          />
        </View>
        <View style={{width: '80%', marginTop: 20}}>
          <FancyButton onPress={handleMainProcess} text="Get Routes" />
        </View>
      </View>
    </View>
  ) : (
    <Loading />
  );
};

export default PlanRide;
