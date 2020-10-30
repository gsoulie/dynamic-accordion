export const MockSimple = {
  out: [
      {label: 'niv1|niv2|niv3|aaa', count: 10},
      {label: 'niv1|niv2|niv3|bbb', count: 10},
      {label: 'niv1|niv2|ccc', count: 10},
      {label: 'niv1|ddd', count: 10},
      {label: 'niv1|fff', count: 10},
      {label: 'eee', count: 10},
      {label: 'niv4|ggg', count: 10},
  ]
}

export const MockProd = {
  out: [
    {label: 'Mental|Emotion Management|Stress Management|Physical Stress|Injury', count: 456},
    {label: 'Health|Injuries', count: 329},
    {label: 'Skills|Motor SKills|Gross Motor Skills|Locomotorskills|Running', count: 250},
    {label: 'Physical|Power', count: 215},
    {label: 'Physical|Speed', count: 207},
    {label: 'Technical|Ability', count: 178},
    {label: 'Health|Rehabilitation', count: 130},
    {label: 'Physical|Velocity', count: 107},
    {label: 'Health|Injuries|Neurological injuries|Concussion', count: 88},
    {label: 'Physiological|Body Composition', count: 78},
    {label: 'Physical|Physical Fitness', count: 77},
    {label: 'Technical|Skills', count: 73},
    {label: 'Technical|Agility', count: 63},
    {label: 'Physiological|Cardiorespiratory', count: 57},
    {label: 'Recovery|Psychophysiological Recovery|Sleep', count: 56},
    {label: 'Mental|Reasoning / Cognition|Decision-Making', count: 41},
    {label: 'Physiological|Body Composition|Body Fat', count: 39},
    {label: 'Physical|Stability', count: 39},
  ]
}
export const MockData = {
    dis: [
      {
        label: 'Niveau1|Acute lymphocytic leukemia',
        count: 10
      },
      {
        label: 'Niveau1|Acute myeloid leukemia',
        count: 14
      },
      {
        label: 'Niveau1|Anus, anal canal & anorectum',
        count: 52
      },
      {
        label: 'Niveau1|Bladder',
        count: 46
      },
      {
        label: 'Niveau1|Niveau2|Bones & joints',
        count: 128
      },
      {
        label: 'Niveau1|Niveau2|Brain & other nervous system',
        count: 206
      },
      {
        label: 'Niveau3|Breast',
        count: 877
      },
      {
        label: 'Niveau4|Niveau5|Chronic lymphocytic leukemia',
        count: 1
      }
    ],
    method: [
      {
        label: 'Niveau1|Niveau2|Controlled Trial',
        count: 26
      },
      {
        label: 'Niveau1|Niveau2|Meta-Analysis',
        count: 615
      },
      {
        label: 'Niveau1|Observational Study',
        count: 45
      },
      {
        label: 'Niveau1|Randomized Controlled Trial',
        count: 963
      },
      {
        label: 'Niveau3|Review',
        count: 3634
      },
      {
        label: 'Niveau4|Systematic Review',
        count: 889
      },
      {
        label: 'Trial',
        count: 515
      }
    ],
    out: [
      {
        label: 'Niveau1|Activities of Daily Living',
        count: 5
      },
      {
        label: 'Niveau1|Acute Radiation Syndrome',
        count: 6
      },
      {
        label: 'Niveau1|Niveau2|Adaptation, Psychological',
        count: 34
      },
      {
        label: 'Niveau3|Niveau4|Adherence',
        count: 1
      },
      {
        label: 'Niveau3|Alopecia',
        count: 12
      },
      {
        label: 'Niveau3|Anemia',
        count: 18
      },
      {
        label: 'Niveau4|Niveau5|Anorexia',
        count: 17
      },
      {
        label: 'Niveau4|Niveau5|Anxiety',
        count: 288
      },
      {
        label: 'Niveau4|Niveau5|Appetite',
        count: 43
      },
      {
        label: 'Niveau4|Niveau5|Arthralgia',
        count: 4
      },
      {
        label: 'Niveau4|Niveau5|Ascitic Fluid',
        count: 1
      }
    ]
  }

export const MockCleanData = [
{
    parent: 'niv1',
    toggle: false,
    children: [
        {
            parent: 'niv2',
            toggle: false,
            children: [
                {
                    parent: 'niv3',
                    toggle: false,
                    children: [
                        {
                            parent: 'aaa',
                            toggle: false,
                            children: []
                        },
                        {
                            parent: 'bbb',
                            toggle: false,
                            children: []
                        }
                    ]
                },
                {
                    parent: 'ccc',
                    toggle: false,
                    children: []
                }
            ]
        },
        {
           parent: 'ddd',
            toggle: false,
            children: []
        },
        {
            parent: 'fff',
            toggle: false,
            children: []
        }
    ]
},
{
    parent: 'eee',
    toggle: false,
    children: []
},
{
    parent: 'niv4',
    toggle: false,
    children: [{
        parent: 'ggg',
        toggle: false,
        children: []
    }]
}]
