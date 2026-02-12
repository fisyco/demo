export const tokens = {
  "gray": {
    "100": {
      "type": "color",
      "source": "variables",
      "value": {
        "a": 1,
        "b": 252,
        "g": 252,
        "r": 252
      },
      "valuesByMode": {
        "dark": {
          "a": 1,
          "b": 17,
          "g": 17,
          "r": 17
        },
        "light": {
          "a": 1,
          "b": 252,
          "g": 252,
          "r": 252
        }
      }
    },
    "200": {
      "type": "color",
      "source": "variables",
      "value": {
        "a": 1,
        "b": 249,
        "g": 249,
        "r": 249
      },
      "valuesByMode": {
        "dark": {
          "a": 1,
          "b": 25,
          "g": 25,
          "r": 25
        },
        "light": {
          "a": 1,
          "b": 249,
          "g": 249,
          "r": 249
        }
      }
    },
    "300": {
      "type": "color",
      "source": "variables",
      "value": {
        "a": 1,
        "b": 240,
        "g": 240,
        "r": 240
      },
      "valuesByMode": {
        "dark": {
          "a": 1,
          "b": 34,
          "g": 34,
          "r": 34
        },
        "light": {
          "a": 1,
          "b": 240,
          "g": 240,
          "r": 240
        }
      }
    }
  },
  "violet": {
    "500": {
      "type": "color",
      "source": "variables",
      "value": {
        "a": 1,
        "b": 241,
        "g": 102,
        "r": 99
      },
      "valuesByMode": {
        "dark": {
          "a": 1,
          "b": 237,
          "g": 58,
          "r": 124
        },
        "light": {
          "a": 1,
          "b": 241,
          "g": 102,
          "r": 99
        }
      }
    }
  },
  "rose": {
    "500": {
      "type": "color",
      "source": "variables",
      "value": {
        "a": 1,
        "b": 94,
        "g": 63,
        "r": 244
      },
      "valuesByMode": {
        "dark": {
          "a": 1,
          "b": 72,
          "g": 29,
          "r": 225
        },
        "light": {
          "a": 1,
          "b": 94,
          "g": 63,
          "r": 244
        }
      }
    }
  },
  "foreground": {
    "default": {
      "type": "color",
      "source": "variables",
      "value": {
        "a": 1,
        "b": 42,
        "g": 23,
        "r": 15
      },
      "valuesByMode": {
        "dark": {
          "a": 1,
          "b": 240,
          "g": 232,
          "r": 226
        },
        "light": {
          "a": 1,
          "b": 42,
          "g": 23,
          "r": 15
        }
      }
    }
  },
  "background": {
    "canvas": {
      "type": "color",
      "source": "variables",
      "value": {
        "a": 1,
        "b": 252,
        "g": 250,
        "r": 248
      },
      "valuesByMode": {
        "dark": {
          "a": 1,
          "b": 23,
          "g": 6,
          "r": 2
        },
        "light": {
          "a": 1,
          "b": 252,
          "g": 250,
          "r": 248
        }
      }
    }
  },
  "accent": {
    "primary": {
      "type": "color",
      "source": "variables",
      "value": {
        "a": 1,
        "b": 129,
        "g": 185,
        "r": 16
      },
      "valuesByMode": {
        "dark": {
          "a": 1,
          "b": 105,
          "g": 150,
          "r": 5
        },
        "light": {
          "a": 1,
          "b": 129,
          "g": 185,
          "r": 16
        }
      }
    }
  },
  "spacing": {
    "8": {
      "type": "number",
      "source": "variables",
      "value": 8,
      "valuesByMode": {
        "dark": 8,
        "light": 8
      }
    },
    "12": {
      "type": "number",
      "source": "variables",
      "value": 12,
      "valuesByMode": {
        "dark": 12,
        "light": 12
      }
    },
    "24": {
      "type": "number",
      "source": "variables",
      "value": 24,
      "valuesByMode": {
        "dark": 24,
        "light": 24
      }
    }
  },
  "heading": {
    "h1": {
      "type": "text",
      "source": "styles",
      "value": {
        "fontSize": 32,
        "fontFamily": "Inter",
        "fontWeight": 600,
        "lineHeightPx": 38
      },
      "valuesByMode": {}
    }
  },
  "body": {
    "regular": {
      "type": "text",
      "source": "styles",
      "value": {
        "fontSize": 16,
        "fontFamily": "Inter",
        "fontWeight": 400,
        "lineHeightPx": 24
      },
      "valuesByMode": {}
    }
  },
  "label": {
    "medium": {
      "type": "text",
      "source": "styles",
      "value": {
        "fontSize": 13,
        "fontFamily": "Inter",
        "fontWeight": 500,
        "lineHeightPx": 18
      },
      "valuesByMode": {}
    }
  },
  "fill": {
    "primary": {
      "type": "fill",
      "source": "styles",
      "value": {
        "a": 1,
        "b": 0.95,
        "g": 0.58,
        "r": 0.24
      },
      "valuesByMode": {}
    },
    "muted": {
      "type": "fill",
      "source": "styles",
      "value": {
        "a": 1,
        "b": 0.87,
        "g": 0.85,
        "r": 0.84
      },
      "valuesByMode": {}
    }
  }
} as const;
