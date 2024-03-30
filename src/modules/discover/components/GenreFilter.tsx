import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { FiSearch } from "react-icons/fi";
import useMangaStore from "../../common/stores/store";
import { splitArrayIntoGroups } from "../../common/helpers/response-filters";
import { IGenreListAPIResponse } from "../../common/types/api-types";

const GenreFilter = () => {
    const [genreArrayGroups] = useState<IGenreListAPIResponse[][]>(splitArrayIntoGroups(useMangaStore.getState().genreList));



    const formSchema = Yup.object({
        selectedOptions: Yup.array()
            .of(Yup.string())
            .min(1, 'At least one option must be selected')

    });

    const submitGenreHandler = (values: { selectedOptions: string[] }) => {
        useMangaStore.setState({ selectedGenres: values.selectedOptions })
        useMangaStore.setState({ selectedFilterType: "genre" })

    }

    return (
        <Formik
            initialValues={{ selectedOptions: useMangaStore.getState().selectedGenres }}
            validationSchema={formSchema}
            onSubmit={submitGenreHandler}
        >
            {({ errors, touched, setFieldValue, values }) => (
                <Form>
                    <div className="w-svw carousel carousel-end mb-3 -mr-16">
                        {genreArrayGroups.map((genreGroup, index) => (
                            <div key={index} className="carousel-item flex flex-row flex-wrap w-full">
                                {genreGroup.map((genre) => (
                                    <label key={genre.slug} className="label cursor-pointer w-1/2 justify-end gap-2 flex-row-reverse">
                                        <span className="label-text">{genre.name}</span>
                                        <Field type="checkbox" name="selectedOptions" value={genre.slug} as="input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const value = e.target.value;
                                            const checked = e.target.checked;
                                            const newSelectedOptions = checked
                                                ? [...values.selectedOptions, value]
                                                : values.selectedOptions.filter((v) => v !== value);
                                            setFieldValue("selectedOptions", newSelectedOptions);
                                            useMangaStore.setState({ selectedGenres: newSelectedOptions })
                                        }} checked={values.selectedOptions.includes(genre.slug)} />
                                    </label>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <h4>Selected Genres:</h4>
                        <ul className="flex flex-row flex-wrap gap-4">
                            {values.selectedOptions.map((item, index) => (
                                <div key={index} className="badge badge-primary badge-outline">{item}</div>
                            ))}
                        </ul>
                        {errors.selectedOptions && touched.selectedOptions ? (
                            <div>{errors.selectedOptions}</div>
                        ) : null}

                        <button className="btn place-self-center w-1/2" type="submit">
                            Search <FiSearch />
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default GenreFilter;