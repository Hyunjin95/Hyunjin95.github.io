/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { styled, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Avatar from '@material-ui/core/Avatar';
import Face from '../images/face.png';

interface CardProps {
  right?: boolean;
  title: string;
  subheader: string;
  content: string;
  date: string;
}

const StyledBackground = styled('div')(({ theme }) => ({
  padding: theme.spacing(6, 2, 4),
  color: 'black',
}));

const StyledDivider = styled('div')(({ theme }) => ({
  color: 'black',
  width: theme.spacing(0.5),
  height: '100%',
  margin: 'auto',
  marginTop: theme.spacing(-13),
  backgroundColor: 'black',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3, 3),
  margin: theme.spacing(2, 2),
}));

const StyledDateRight = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    left: '57%',
    top: 0,
    marginTop: theme.spacing(6),
  },
}));

const StyledDateLeft = styled(StyledDateRight)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    left: 'auto',
    right: '57%',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  top: 0,
  marginTop: theme.spacing(3),
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: 2,
}));

const TimelineCard: React.FC<CardProps> = ({
  title,
  subheader,
  content,
  date,
  right,
}: CardProps) => (
  <StyledCard>
    <CardHeader title={title} subheader={subheader} />
    <CardContent>
      <Typography variant="body1" gutterBottom>
        {content}
      </Typography>
    </CardContent>
    {right ? (
      <StyledDateLeft variant="h6" align="right">
        {date}
      </StyledDateLeft>
    ) : (
      <StyledDateRight variant="h6" align="right">
        {date}
      </StyledDateRight>
    )}
  </StyledCard>
);

const AlignedCard: React.FC<CardProps> = ({
  right,
  title,
  subheader,
  content,
  date,
}: CardProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (isSmallScreen) {
    return (
      <Grid container style={{ position: 'relative' }}>
        <Grid item xs={3} sm={2}>
          <StyledAvatar alt="my face" src={Face} />
          <StyledDivider />
        </Grid>
        <Grid item xs={9} sm={10}>
          <TimelineCard
            title={title}
            subheader={subheader}
            content={content}
            date={date}
            right={right}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      direction={right ? 'row-reverse' : 'row'}
      style={{ position: 'relative' }}
    >
      <Grid item sm={10} md={5}>
        <TimelineCard
          title={title}
          subheader={subheader}
          content={content}
          date={date}
          right={right}
        />
      </Grid>
      <Grid item sm={2} md={2}>
        <StyledAvatar alt="my face" src={Face} />
        <StyledDivider />
      </Grid>
      <Grid item md={5} />
    </Grid>
  );
};

const Timeline: React.FC = () => {
  const cardContents = {
    university: {
      title: 'Seoul National University',
      subheader: 'Computer Science and Engineering',
      content: 'Going to graduate in August 2020.',
      date: 'March 2013 - Present',
    },
  };

  return (
    <StyledBackground>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Timeline
        </Typography>
        <AlignedCard right {...cardContents.university} />
        <AlignedCard {...cardContents.university} />
        <AlignedCard right {...cardContents.university} />
        <AlignedCard {...cardContents.university} />
      </Container>
    </StyledBackground>
  );
};

export default Timeline;
