export interface TeamMember {
  name: string;
  features: Feature[];
}

interface Feature {
  feature: string;
  time: string;
}

const dmitri: TeamMember = {
  name: 'dimlbc.name',
  features: [
    { feature: 'dimlbc.feature', time: 'dimlbc.time' },
    { feature: 'dimlbc.feature1', time: 'dimlbc.time1' },
    { feature: 'dimlbc.feature2', time: 'dimlbc.time2' }
  ]
};

const julia: TeamMember = {
  name: 'julia.name',
  features: [
    { feature: 'julia.feature', time: 'julia.time' },
    { feature: 'julia.feature1', time: 'julia.time1' },
    { feature: 'julia.feature2', time: 'julia.time2' },
    { feature: 'julia.feature3', time: 'julia.time3' },
    { feature: 'julia.feature4', time: 'julia.time4' },
  ]
};

const alexKlim: TeamMember = {
  name: 'alexKlim.name',
  features: [
    { feature: 'alexKlim.feature', time: 'alexKlim.time' },
    { feature: 'alexKlim.feature1', time: 'alexKlim.time1' },
    { feature: 'alexKlim.feature2', time: 'alexKlim.time2' },
    { feature: 'alexKlim.feature3', time: 'alexKlim.time3' },
    { feature: 'alexKlim.feature4', time: 'alexKlim.time4' }
  ]
};

const alex: TeamMember = {
  name: 'alex.name',
  features: [
    { feature: 'alex.feature', time: 'alex.time' },
    { feature: 'alex.feature1', time: 'alex.time1' }
  ]
};

const pavel: TeamMember = {
  name: 'pavel.name',
  features: [
    { feature: 'pavel.feature', time: 'pavel.time' },
    { feature: 'pavel.feature1', time: 'pavel.time1' }
  ]
};

const vladimir: TeamMember = {
  name: 'vladimir.name',
  features: [
    { feature: 'vladimir.feature', time: 'vladimir.time' },
    { feature: 'vladimir.feature1', time: 'vladimir.time1' }
  ]
};

export const teamMembersWorklog: TeamMember[] = [julia, alex, alexKlim, vladimir, pavel, dmitri];
