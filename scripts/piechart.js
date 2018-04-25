var pie = new d3pie("pieChartAge", {
    header: {
        title: {
            text: "Gender",
            fontSize: 18,
            font: "lato"
        },
    },
    size: {
        canvasWidth: 400,
        pieInnerRadius: "25%",
        pieOuterRadius: "90%"
    },
    data: {
        sortOrder: "value-desc",
        content: [{
            label: "Male",
            value: 59,
            color: "#4286f4"
        }, {
            label: "Female",
            value: 174,
            color: "#ed5e78"
        }]
    },
    labels: {
        outer: {
            format: "none",
            pieDistance: 32
        },
        inner: {
            format: "label-percentage2",
            hideWhenLessThanPercentage: 3
        },
        mainLabel: {
            color: "#ffffff",
            fontSize: 11
        },
        percentage: {
            color: "#ffffff",
            decimalPlaces: 0
        },
        value: {
            color: "#adadad",
            fontSize: 11
        },
        lines: {
            enabled: !0
        },
        truncation: {
            enabled: !0
        }
    },
    effects: {
        pullOutSegmentOnClick: {
            effect: "linear",
            speed: 800,
            size: 8
        }
    },
    misc: {
        gradient: {
            enabled: !0,
            percentage: 100
        }
    }
});
var pie = new d3pie("pieChartAge", {
    header: {
        title: {
            text: "Age",
            fontSize: 18,
            font: "lato"
        },
    },
    size: {
        canvasWidth: 400,
        pieInnerRadius: "25%",
        pieOuterRadius: "90%"
    },
    data: {
        sortOrder: "value-desc",
        content: [{
            label: "Under 6 years",
            value: 24,
            color: "#4286f4"
        }, {
            label: "7-12 years",
            value: 82,
            color: "#ed5e78"
        }, {
            label: "13-17 years",
            value: 85,
            color: "#47b1c1"
        }, {
            label: "Over 18",
            value: 2,
            color: "#4a9b75"
        }]
    },
    labels: {
        outer: {
            format: "none",
            pieDistance: 32
        },
        inner: {
            format: "label-percentage2",
            hideWhenLessThanPercentage: 3
        },
        mainLabel: {
            color: "#ffffff",
            fontSize: 11
        },
        percentage: {
            color: "#ffffff",
            decimalPlaces: 0
        },
        value: {
            color: "#adadad",
            fontSize: 11
        },
        lines: {
            enabled: !0
        },
        truncation: {
            enabled: !0
        }
    },
    effects: {
        pullOutSegmentOnClick: {
            effect: "linear",
            speed: 800,
            size: 8
        }
    },
    misc: {
        gradient: {
            enabled: !0,
            percentage: 100
        }
    }
});
var pie = new d3pie("pieChartRace", {
    header: {
        title: {
            text: "Ethnicity",
            fontSize: 18,
            font: "lato"
        },
    },
    size: {
        canvasWidth: 400,
        pieInnerRadius: "25%",
        pieOuterRadius: "90%"
    },
    data: {
        sortOrder: "value-desc",
        smallSegmentGrouping: {
            enabled: !0,
            value: 10
        },
        content: [{
            label: "White",
            value: 150,
            color: "#47b1c1"
        }, {
            label: "Black",
            value: 43,
            color: "#4286f4"
        }, {
            label: "Bi/Multi Racial",
            value: 15,
            color: "#ed5e78"
        }, {
            label: "Asian",
            value: 1,
            color: "#a05c56"
        }, {
            label: "Hispanic",
            value: 24,
            color: "#ed5e78"
        }]
    },
    labels: {
        outer: {
            format: "none",
            pieDistance: 32
        },
        inner: {
            format: "label-percentage2",
            hideWhenLessThanPercentage: 3
        },
        mainLabel: {
            color: "#ffffff",
            fontSize: 11
        },
        percentage: {
            color: "#ffffff",
            decimalPlaces: 0
        },
        value: {
            color: "#adadad",
            fontSize: 11
        },
        lines: {
            enabled: !0
        },
        truncation: {
            enabled: !0
        }
    },
    effects: {
        pullOutSegmentOnClick: {
            effect: "linear",
            speed: 800,
            size: 8
        }
    },
    misc: {
        gradient: {
            enabled: !0,
            percentage: 100
        }
    }
});