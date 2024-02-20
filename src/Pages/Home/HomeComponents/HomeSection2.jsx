import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { IoIosAddCircle } from 'react-icons/io';  

const HomeWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3vh;
  position: relative;
`;

const UserPKG = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 2vh;
  width: 80vw;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  overflow: hidden;
`;

const S2Wrap = styled.div`
  display: flex;
  width: 70vw;
`;

const S2Wrap2 = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const BtnS2 = styled.button`
  background-color: inherit;
  border: none;
  size: 50;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const UserRname = styled.div`
  font-size: 24px;
`;

const MemoText = styled.div`
  margin-top: 5px;
`;

const StatusIndicator = styled.div`
  padding-top: 10px;
  text-align: center;
  width: 70px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: auto;
  margin-right: 10px;
  background-color: ${(props) => props.statusColor};
`;

const StatusText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

const ToHomeAddPackage = styled(IoIosAddCircle)`
  position: fixed;
  bottom: 5vh;
  right: 10vw;
  font-size: 50px;
  color: #ED8C37;
  background-color: inherit;
  cursor: pointer;
`;

const getStatusColor = (endDate) => {
  const today = new Date();
  const end = new Date(endDate);
  return end < today ? '#808080' : '#ED8C37'; 
};

const getStatusText = (endDate) => {
  const today = new Date();
  const end = new Date(endDate);
  return end < today ? '기간 만료' : '진행중'; 
};

const Homesection2 = () => {
  const [packages, setPackages] = useState([]); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const token = localStorage.getItem('authToken'); 
        const response = await axios.get('https://dofarming.duckdns.org/api/v1/track', {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        });
        const newPackages = response.data.map((pkg) => {
          const [routine, memo] = pkg.content.split(', '); 
          return { ...pkg, routine, memo }; 
        });
        setPackages(newPackages); 
      } catch (error) {
        console.error('Error fetching packages:', error); 
      }
    };

    fetchPackages(); 
  }, []); 

  const handleDeletePackage = async (trackId) => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`https://dofarming.duckdns.org/api/v1/track/${trackId}`, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      });
      setPackages(packages.filter(pkg => pkg.trackId !== trackId));
    } catch (error) {
      console.error('Error deleting package:', error); 
    }
  };

  const RoutineZero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ED8C37;
    font-weight: 340;
  `;

  const Zero1 = styled.div`
    line-height: 28px;
  `;

  return (
    <>
      {packages.length === 0 && (
        <RoutineZero>
          <Zero1>No routine yet
            <br /> Please make a routine first
          </Zero1>
        </RoutineZero>
      )}

      {packages.length > 0 && (
        <HomeWrap2>
          {packages.map((pkg) => (
            <Link to={`/todo?trackId=${pkg.trackId}`} key={pkg.trackId} style={{ textDecoration: 'none' , color: 'black'}} >
              <UserPKG id="userPKG">
                <div>
                  <S2Wrap>
                    <S2Wrap2>
                      <UserRname>{pkg.routine}</UserRname>
                      <div>{pkg.startDate} ~ {pkg.endDate}</div>
                      <MemoText>메모: {pkg.memo}</MemoText> 
                    </S2Wrap2>
                    <BtnS2 onClick={(e) => {e.stopPropagation(); handleDeletePackage(pkg.trackId);}} className="BtnS2Del">
                      X 
                    </BtnS2>
                  </S2Wrap>
                </div>
                <StatusIndicator statusColor={getStatusColor(pkg.endDate)}>
                  <StatusText>
                    {getStatusText(pkg.endDate)}
                  </StatusText>
                </StatusIndicator>
              </UserPKG>
            </Link>
          ))}
        </HomeWrap2>
      )}
      <Link to="/HomeAddPackage">
        <ToHomeAddPackage /> 
      </Link>
    </>
  );
};

export default Homesection2;