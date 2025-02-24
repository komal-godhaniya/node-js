const adminschema = require("../model/adminschema")
const doctorschema = require("../model/doctorschema")
const patientschema = require("../model/patientschema")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// FOR ADMIN 

module.exports.adminRegister = async (req, res) => {
    let admin = await adminschema.findOne({ email: req.body.email })

    if (admin) {
        return res.status(200).json({ msg: "Admin Already Exits !" })
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)

    await adminschema.create(req.body)
        .then(() => {
            res.status(200).json({ msg: "Admin Created" })
        })
}

module.exports.viewadminRegister = async (req, res) => {
    await adminschema.find({})
        .then((data) => {
            res.status(200).json({ "data": data })
        })
}

module.exports.adminLogin = async (req, res) => {
    let admin = await adminschema.findOne({ email: req.body.email });

    if (!admin) {
        return res.status(200).json({ msg: "Admin Not Found !" });
    }

    if (await bcrypt.compare(req.body.password, admin.password)) {
        let token = jwt.sign({ adminData: admin }, "rnw", { expiresIn: "1h" })
        return res.status(200).json({ msg: "Admin Logged In !", token: token })
    }
    else {
        return res.status(200).json({ msg: "Password is Wrong !" });
    }
}

module.exports.viewadminUser = async (req, res) => {
    await adminschema.find({})
        .then((data) => {
            res.status(200).json({ data: data })
        })
}



// FOR DOCTOR



// module.exports.doctorRegister = async (req, res) => {
//     let doctor = await doctorschema.findOne({ email: req.body.email })

//     if (doctor) {
//         return res.status(200).json({ msg: "Doctor Already Exits !" })
//     }

//     let token = jwt.sign({ doctorData: doctor }, "rnw", { expiresIn: "1h" })

//     req.body.password = await bcrypt.hash(req.body.password, 10)

//     await doctorschema.create(req.body)
//         .then(() => {
//             res.status(200).json({ msg: "Doctor Created" })
//         })
// }


module.exports.doctorRegister = async (req, res) => {
    let doctor = await doctorschema.findOne({ email: req.body.email });

    if (doctor) {
        return res.status(200).json({ msg: "Doctor Already Exists!" });
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);

    let newDoctor = await doctorschema.create(req.body);

    let token = jwt.sign({ doctorData: newDoctor }, "rnw", { expiresIn: "1h" });

    res.status(200).json({ msg: "Doctor Created", token, doctor: newDoctor });
}

module.exports.viewdoctorRegister = async (req, res) => {
    await doctorschema.find({})
        .then((data) => {
            res.status(200).json({ "data": data })
        })
}

module.exports.doctorLogin = async (req, res) => {
    let doctor = await doctorschema.findOne({ email: req.body.email });

    if (!doctor) {
        return res.status(200).json({ msg: "Doctor Not Found !" });
    }

    if (await bcrypt.compare(req.body.password, doctor.password)) {
        let token = jwt.sign({ doctorData: doctor }, "rnw", { expiresIn: "1h" })
        return res.status(200).json({
            msg: "Doctor Logged In !",
            token,
            doctor: {
                id: doctor._id,
                name: doctor.name,
                email: doctor.email,
                password: doctor.password,
                gender: doctor.gender,
                city: doctor.city,
            },
        })
    }
    else {
        return res.status(200).json({ msg: "Password is Wrong !" });
    }
}

module.exports.viewdoctorUser = async (req, res) => {
    await doctorschema.find({})
        .then((data) => {
            res.status(200).json({ data: data })
        })
}



// FOR PATIENT

module.exports.patientRegister = async (req, res) => {
    let patient = await patientschema.findOne({ email: req.body.email });

    if (patient) {
        return res.status(200).json({ msg: "Patient Already Exists!" });
    }

    if (req.file) {
        req.body.image = req.file.filename;
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);

    let token = jwt.sign({ patientData: patient }, "rnw", { expiresIn: "1h" })

    await patientschema.create(req.body);

    res.status(200).json({ msg: "Patient Created!", token, patient });
};

module.exports.viewpatientRegister = async (req, res) => {
    await patientschema.find({})
        .then((data) => {
            res.status(200).json({ "data": data })
        })
}

module.exports.patientLogin = async (req, res) => {
    let patient = await patientschema.findOne({ email: req.body.email });

    if (!patient) {
        return res.status(200).json({ msg: "Patient Not Found !" });
    }

    if (await bcrypt.compare(req.body.password, patient.password)) {
        let token = jwt.sign({ patientData: patient }, "rnw", { expiresIn: "1h" })
        return res.status(200).json({
            msg: "Patient Logged In !",
            token,
            patient: {
                id: patient._id,
                name: patient.name,
                email: patient.email,
                password: patient.password,
                image: patient.image,
                phone: patient.phone,
                gender: patient.gender,
                city: patient.city,
            },
        })
    }
    else {
        return res.status(200).json({ msg: "Password is Wrong !" });
    }
}

module.exports.viewpatientUser = async (req, res) => {
    await patientschema.find({})
        .then((data) => {
            res.status(200).json({ data: data })
        })
}

module.exports.updatepatient = async (req, res) => {
    const patient = await patientschema.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!patient) return res.status(404).json({ msg: "Patient Not Found!" });

    res.status(200).json({ msg: "Patient Updated!", patient });
};


