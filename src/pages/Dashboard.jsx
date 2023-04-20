import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import dashicon from '../assests/DashboardPic.png'
import transicon from '../assests/TransactionPic.png'
import scheduleicon from '../assests/SchedulesPic.png'
import usericon from '../assests/UsersPic.png'
import settingicon from '../assests/SettingsPic.png'
import revenueicon from '../assests/revenue.png'
import transactionicon from '../assests/transaction.png'
import likesicon from '../assests/likes.png'
import usersicon from '../assests/users.png'
// import styled from 'styled-components'

import {
  Container, Board, DashBoard, Dashboardicon, Activities, ActivitiesCard, Contactus, DashboardText,
  Dashboardtag, Header, Help, LikesAmount, LikesCard, LikesIcon, NavBg, Navigation, Notification, Profile,
  ProfilePic, ProfilePicBorder, RevenueAmount, RevenueCard, RevenueIcon, Schedules, Schedulesicon, Schedulestag,
  SearchBar, SearchText, Searchicon, Settings, Settingsicon, Settingstag, TodaysSchedule,
  TodaysScheduleCard, TopProducts, TopProductsCard, TotalLikes, TotalLikesTag, TotalRevenue,
  TotalRevenueTag, TotalTransactions, TotalTransactionsTag, TotalUsersTag, Totalusers, TranSactions,
  TranSactionsCard, TransactionAmount, TransactionIcon, Transactionicon, Transactiontag, Users,
  UsersAmount, UsersCard, UsersIcon, Usersicon, Userstag, TodaysScheduletag, Task1,Task2, Line1, Task1Tag, Task1Time, Task1Address, Line2, Task2Tag, Task2Time, Task2Address, Alltask
} from './Dashboard-Styling'
import LineGraph from '../components/LineGraph'
import PieGraph from '../components/PieGraph'


function Dashboard() {

  const [search, setsearch] = useState(true);

  const handlesearch = () => {
    setsearch(false);
  }

  
  const [MyData, setMyData] = useState([1500]);

  useEffect(() => {

    const interval = setInterval(() => {
      setMyData(prevData => prevData.map(value => value + 110));
      console.log("setMyData");
    }, 3000);

    return () => clearInterval(interval);

  },[]);

  return (
    <Container>

      <Navigation>

        <NavBg>

          <Board>
            Board.
          </Board>

          <DashBoard>

            <Dashboardicon src={dashicon} />
            <Dashboardtag>Dashboard</Dashboardtag>

          </DashBoard>

          <TranSactions>

            <Transactionicon src={transicon} />
            <Transactiontag>Transactions</Transactiontag>

          </TranSactions>

          <Schedules>

            <Schedulesicon src={scheduleicon} />
            <Schedulestag>Schedules</Schedulestag>

          </Schedules>

          <Users>

            <Usersicon src={usericon} />
            <Userstag>Users</Userstag>

          </Users>

          <Settings>

            <Settingsicon src={settingicon} />
            <Settingstag>Settings</Settingstag>

          </Settings>

          <Help>Help</Help>
          <Contactus>Contact Us</Contactus>

        </NavBg>

      </Navigation>

      <Header>

        <DashboardText>Dashboard</DashboardText>

        <SearchBar onClick={() => handlesearch()} />

        <Searchicon ><i class="fa fa-search" aria-hidden="true"></i></Searchicon>

        {search ? (<SearchText onMouseEnter={handlesearch}>Search...</SearchText>) : (<></>)}


        {/* </SearchBar> */}

        <Notification><i class="fa-regular fa-bell fa-lg"></i></Notification>

        <Profile>

          <ProfilePicBorder>
            <ProfilePic src='https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1591435140280-D2B4F21NWCTHE77MTTAX/Ash+London+Professional+LinkedIn+Headshot' />
          </ProfilePicBorder>
        </Profile>

      </Header>

      <TotalRevenue>

        <RevenueCard>
          <RevenueIcon src={revenueicon} />
          <TotalRevenueTag>Total Revenues</TotalRevenueTag>
          <RevenueAmount > <span>$ {MyData}</span> </RevenueAmount>
        </RevenueCard>

      </TotalRevenue>

      <TotalTransactions>

        <TranSactionsCard>
          <TransactionIcon src={transactionicon} />
          <TotalTransactionsTag>Total Transactions</TotalTransactionsTag>
          <TransactionAmount><span> {MyData -1000 }</span> </TransactionAmount>
        </TranSactionsCard>

      </TotalTransactions>

      <TotalLikes>

        <LikesCard>
          <LikesIcon src={likesicon} />
          <TotalLikesTag>Total Likes</TotalLikesTag>
          <LikesAmount><span> {Math.trunc(MyData/2) -100 }</span> </LikesAmount>
        </LikesCard>

      </TotalLikes>


      <Totalusers>

        <UsersCard>
          <UsersIcon src={usersicon} />
          <TotalUsersTag>Total Users</TotalUsersTag>
          <UsersAmount><span> {Math.trunc(MyData/3) -100 }</span> </UsersAmount>
        </UsersCard>

      </Totalusers>


      <Activities>
        <ActivitiesCard>
          <LineGraph/>
        </ActivitiesCard>
      </Activities>

      <TopProducts> 
        <TopProductsCard>
          {/* <PieGraph/> */}
        </TopProductsCard>
      </TopProducts>

      <TodaysSchedule>
        <TodaysScheduleCard>
          <TodaysScheduletag>Today’s schedule</TodaysScheduletag>
          
          <Alltask>See All</Alltask>
          

          <Task1></Task1>
          <Line1></Line1>
          <Task1Tag>Meeting with suppliers from Kuta Bali</Task1Tag>
          <Task1Time>14.00-15.00</Task1Time>
          <Task1Address>at Sunset Road, Kuta, Bali </Task1Address>

          <Task2></Task2>
          <Line2></Line2>
          <Task2Tag>Check operation at Giga Factory 1</Task2Tag>
          <Task2Time>18.00-20.00</Task2Time>
          <Task2Address>at Central Jakarta </Task2Address>

          {/* <Task2></Task2> */}
        </TodaysScheduleCard>
      </TodaysSchedule>

    </Container>
  )
}

export default Dashboard