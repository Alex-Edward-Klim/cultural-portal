export interface TeamMember {
  name: string;
  features: Feature[];
}

interface Feature {
  feature: string;
  time: string;
}

const dmitri: TeamMember = {
  name: 'dmitri.name',
  features: [
    { feature: 'dmitri.feature', time: 'dmitri.time' },
    { feature: 'dmitri.feature1', time: 'dmitri.time1' },
    { feature: 'dmitri.feature2', time: 'dmitri.time2' },
    { feature: 'dmitri.feature3', time: 'dmitri.time3' },
    { feature: 'dmitri.feature4', time: 'dmitri.time4' }
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

const alexey: TeamMember = {
  name: 'alexey.name',
  features: [
    { feature: 'alexey.feature', time: 'alexey.time' },
    { feature: 'alexey.feature1', time: 'alexey.time1' },
    { feature: 'alexey.feature2', time: 'alexey.time2' },
    { feature: 'alexey.feature3', time: 'alexey.time3' },
    { feature: 'alexey.feature4', time: 'alexey.time4' }
  ]
};

const oleksandr: TeamMember = {
  name: 'oleksandr.name',
  features: [
    { feature: 'oleksandr.feature', time: 'oleksandr.time' },
    { feature: 'oleksandr.feature1', time: 'oleksandr.time1' },
    { feature: 'oleksandr.feature2', time: 'oleksandr.time2' },
    { feature: 'oleksandr.feature3', time: 'oleksandr.time3' },
    { feature: 'oleksandr.feature4', time: 'oleksandr.time4' },
  ]
};

const pavel: TeamMember = {
  name: 'pavel.name',
  features: [
    { feature: 'pavel.feature', time: 'pavel.time' },
    { feature: 'pavel.feature1', time: 'pavel.time1' },
    { feature: 'pavel.feature2', time: 'pavel.time2' },
    { feature: 'pavel.feature3', time: 'pavel.time3' },
    { feature: 'pavel.feature4', time: 'pavel.time4' },
  ]
};

const vladimir: TeamMember = {
  name: 'vladimir.name',
  features: [
    { feature: 'vladimir.feature', time: 'vladimir.time' },
    { feature: 'vladimir.feature1', time: 'vladimir.time1' },
    { feature: 'vladimir.feature2', time: 'vladimir.time2' },
    { feature: 'vladimir.feature3', time: 'vladimir.time3' },
    { feature: 'vladimir.feature4', time: 'vladimir.time4' },
  ]
};

export const teamMembersWorklog: TeamMember[] = [julia, oleksandr, alexey, vladimir, pavel, dmitri];
