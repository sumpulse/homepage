export const tracks = {
  1: {
    id: 1,
    title: "Come On",
    description: "come on, come on",
    release: "2021-01-23",
    bpm: 85,
    fullLengthSec: 117,
    genres: [5],
    editIds: [1],
  },
  2: {
    id: 2,
    title: "This Is My Day",
    description: "123 123",
    release: "2020-12-31",
    bpm: 90,
    fullLengthSec: 132,
    genres: [5],
    editIds: [2, 3],
  },
  3: {
    id: 3,
    title: "Before Explosion",
    description: "booooom",
    release: "2021-01-09",
    bpm: 130,
    fullLengthSec: 155,
    genres: [5],
    editIds: [4],
  },
};

export const trackEdits = {
  1: {
    id: 1,
    type: "full",
    length: 117,
    audioSources: [
      {
        url:
          "https://previews.customer.envatousercontent.com/files/317860620/preview.mp3",
        type: "audio/mpeg",
      },
    ],
    storeLinks: {
      aj: "https://audiojungle.net/item/come-on/29971812",
    },
  },
  2: {
    id: 2,
    type: "full",
    length: 132,
    audioSources: [
      {
        url:
          "https://previews.customer.envatousercontent.com/files/317860620/preview.mp3",
        type: "audio/mpeg",
      },
    ],
    storeLinks: {
      aj: "https://audiojungle.net/item/this-is-my-day/29728740",
    },
  },
  3: {
    id: 3,
    type: "loop",
    length: 16,
    audioSources: [
      {
        url:
          "https://previews.customer.envatousercontent.com/files/317860620/preview.mp3",
        type: "audio/mpeg",
      },
    ],
    storeLinks: {
      aj: "https://audiojungle.net/item/this-is-my-day/29728740",
    },
  },
  4: {
    id: 4,
    type: "full",
    length: 155,
    audioSources: [
      {
        url:
          "https://previews.customer.envatousercontent.com/files/316563288/preview.mp3",
        type: "audio/mpeg",
      },
    ],
    storeLinks: {
      aj: "https://audiojungle.net/item/before-explosion/29830357",
      mg: "https://musicgrid.com/index.php?content=track&id=L23THV",
    },
  },
};
