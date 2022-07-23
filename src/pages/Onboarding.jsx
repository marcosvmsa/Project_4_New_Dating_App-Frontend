import React from 'react';
import {
  TextInput,
  Checkbox,
  Button,
  Grid,
  RadioGroup,
  Radio,
  Image,
} from '@mantine/core';
import {DatePicker} from '@mantine/dates';
import {useForm} from '@mantine/form';
import Nav from '../components/Nav';
import '../assets/CSS/Onboarding.css';

const Onboarding = () => {
  const form = useForm({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      avatar: '',
      picturesList: '',
      userType: '',
      accountStatus: '',
      gender: '',
      showGender: false,
      genderIdentity: '',
      genderInterest: '',
      occupation: '',
      about: '',
      locationID: '',
      birthDateDay: '',
      birthDateMonth: '',
      birthDateYear: '',
      matchesList: [],
    },
  });
  // initialValues.avatar

  return (
    <div className="body" >
      <Nav minimal={true}
        setShowRegisterForm={() => {
        }}
        showRegisterForm={false}
      />
      <h2>Profile Settings</h2>
      <div className="form" >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          {/* ---------------------------------------------------------*/}
          <Grid>
            <Grid.Col span={6} >
              {/* <Grid>*/}
              <Grid.Col span={9} >
                <TextInput
                  label="User Name"
                  placeholder="User Name"
                  {...form.getInputProps('userName')}
                />
              </Grid.Col>

              <Grid.Col span={9} >
                <TextInput
                  label="First Name"
                  placeholder="First Name"
                  {...form.getInputProps('firstName')}
                />
              </Grid.Col>

              <Grid.Col span={9} >
                <TextInput
                  label="Last Name"
                  placeholder="Last Name"
                  {...form.getInputProps('lastName')}
                />
              </Grid.Col>

              {/* <Grid.Col span={9} >*/}
              {/*  <TextInput*/}
              {/*    label="accountStatus"*/}
              {/*    placeholder="accountStatus"*/}
              {/*    {...form.getInputProps('accountStatus')}*/}
              {/*  />*/}
              {/* </Grid.Col>*/}

              <Grid.Col span={9} >
                <RadioGroup
                  defaultValue={[]}
                  color="red"
                  label="Looking for"
                  spacing="xs"
                >
                  <Radio
                    value="Women"
                    label="Women"
                    radius="xl"
                    size="xs"
                  />

                  <Radio
                    value="Man"
                    label="Man"
                    radius="xl"
                    size="xs"
                  />

                  <Radio
                    value="Everyone"
                    label="Everyone"
                    radius="xl"
                    size="xs"
                  />

                </RadioGroup>
              </Grid.Col>

              <Grid.Col span={9} >
                <RadioGroup
                  defaultValue={['react']}
                  color="red"
                  label="Select your Gender"
                  spacing="xs"
                >
                  <Radio
                    value="Women"
                    label="Women"
                    radius="xl"
                    size="xs"
                  />

                  <Radio
                    value="Man"
                    label="Man"
                    radius="xl"
                    size="xs"
                  />

                  <Radio
                    value="LGBTQIA"
                    label="LGBTQIA"
                    radius="xl"
                    size="xs"
                  />

                </RadioGroup>
              </Grid.Col>

              <Grid.Col span={9} >
                <RadioGroup
                  // defaultValue={[]}
                  color="red"
                  label="Show Gender"
                  spacing="xs"
                >
                  <Radio
                    value="Yes"
                    label="Yes"
                    radius="xl"
                    size="xs"
                  />

                  <Radio
                    value="No"
                    label="No"
                    radius="xl"
                    size="xs"
                  />

                </RadioGroup>
              </Grid.Col>

              <Grid.Col span={9} >
                <TextInput
                  label="Occupation"
                  placeholder="Occupation"
                  {...form.getInputProps('occupation')}
                />
              </Grid.Col>

              <Grid.Col span={9} >
                <TextInput
                  label="About"
                  placeholder="About"
                  {...form.getInputProps('about')}
                />
              </Grid.Col>

              {/* <Grid.Col span={9} >*/}
              {/*  <TextInput*/}
              {/*    label="locationID"*/}
              {/*    placeholder="locationID"*/}
              {/*    {...form.getInputProps('locationID')}*/}
              {/*  />*/}
              {/* </Grid.Col>*/}

              {/* select data Birth Date*/}
              <Grid.Col span={9} >
                <DatePicker
                  placeholder="Pick date"
                  label="Event date"
                  required />
              </Grid.Col>

              <Grid.Col span={9} >
                <Checkbox
                  mt="md"
                  label="I agree to sell my privacy"
                  {...form.getInputProps('showGender', {type: 'checkbox'})}
                />
              </Grid.Col>

              {/* </Grid>*/}
            </Grid.Col>
            {/* ---------------------------------------------------------*/}
            <Grid.Col span={6} >
              <Grid.Col span={9} >
                <TextInput
                  label="Avatar"
                  placeholder="Place your Avatar URL Picture"
                  {...form.getInputProps('avatar')}
                />
              </Grid.Col>

              <Grid.Col span={9} >
                <div style={{borderStyle: 'solid', width: '480', height: 500, marginLeft: 'auto', marginRight: 'auto'}}>
                  <Image
                    width={'auto'}
                    height={500}
                    src={form.values.avatar}
                    alt="Random unsplash image"
                    withPlaceholder
                    // radius={500}
                  />
                </div>
              </Grid.Col>

              {/* <Grid.Col span={9} >*/}
              {/*  <TextInput*/}
              {/*    label="Pictures List"*/}
              {/*    placeholder="add your pictures url"*/}
              {/*    {...form.getInputProps('picturesList')}*/}
              {/*  />*/}
              {/* </Grid.Col>*/}

            </Grid.Col>
          </Grid>

          <Button type="submit">Submit</Button>

        </form>
      </div>
    </div>

  );
};

export default Onboarding;
